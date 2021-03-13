<?php
/**
 * ███╗   ███╗███████╗████████╗ █████╗     ███████╗██╗███████╗██╗     ██████╗ ███████╗
 * ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗    ██╔════╝██║██╔════╝██║     ██╔══██╗██╔════╝
 * ██╔████╔██║█████╗     ██║   ███████║    █████╗  ██║█████╗  ██║     ██║  ██║███████╗
 * ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║    ██╔══╝  ██║██╔══╝  ██║     ██║  ██║╚════██║
 * ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║    ██║     ██║███████╗███████╗██████╔╝███████║
 * ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝ ╚══════╝
 *
 */

class mt_meta_field {
	private $args = [];

	public function __construct( $args, $is_inner_field = false ) {
		$this->args = $args;

		//saving values for repeaters and groups
		if( !empty( $this->args['fields'] ) ) {
			if( $this->args['type'] === "repeater" ) {
				add_action( 'save_post', [ $this, 'save_repeater_field' ] );
			} elseif( $this->args['type'] === "group" ) {
				add_action( 'save_post', [ $this, 'save_group_field' ] );
			}
		}

		if( !$is_inner_field ) {
			add_action( 'add_meta_boxes', [ $this, 'create_field' ] );
			add_action( 'save_post', [ $this, 'save_field' ] );
		}
	}

	public function save_group_field( $post_id, $args = null ) {
		if( !$args ) $args = $this->args;
		foreach ( $args['fields'] as $key => $field ) {
			$field['slug'] = $args['slug'] . "__" . $field['slug'];
			$args['fields'][$key]['slug'] = $field['slug'];
			$this->save_field( $post_id, $field['slug'] );
			if( !empty( $field['fields'] ) ) {
				$this->save_group_field( $post_id, $field );
			}
		}
	}

	public function save_repeater_field( $post_id, $args = null ) {
		if( !$args ) $args = $this->args;
		foreach ( $args['fields'] as $key => $field ) {
			$repeater_json 	= get_post_meta( $post_id, $args['slug'], true ) ? get_post_meta( get_the_ID(), $args['slug'], true ) : '[0]';
			$repeater_ids	= json_decode( $repeater_json );
			foreach ( $repeater_ids as $id ) {
				$field['slug'] = $args['slug'] . "_" . $id . "__" . $field['slug'];
				$args[$key]['slug'] = $field['slug'];
				$this->save_field( $post_id, $field['slug'] );
			}
			if( !empty( $field['fields'] ) ) {
				$this->save_repeater_field( $post_id, $field );
			}
		}
	}

	public function create_field( $post_type ) {
		add_meta_box( $this->args['slug'], $this->args['title'], [ $this, 'create_field_html' ], $this->args['location'] );
	}

	public function save_field( $post_id, $slug = null ) {
		if( !$slug ) $slug = $this->args['slug'];
		if( isset( $_POST[$slug] ) ) {
			$meta_value = sanitize_text_field( $_POST[$slug] );
			if( $meta_value ) {
				update_post_meta( $post_id, $slug, $meta_value );
			}
			else {
				$old_meta_value = get_post_meta( get_the_ID(), $slug, true );
				delete_post_meta( $post_id, $slug, $old_meta_value );
			}
		}
	}

	public function create_field_html() {
		$meta_value 	= get_post_meta( get_the_ID(), $this->args['slug'], true );
		$class_name 	= $this->args['class'];
		$slug			= $this->args['slug'];
		$options		= $this->args['options'] ?? null;
		switch ( $this->args['type'] ) {
			case "input" :
				echo <<<HTML
					<input id="{$slug}" class="{$class_name}" name="{$slug}" value="{$meta_value}" />
				HTML;
				break;
			case "url" :
				$meta_value = esc_url( $meta_value );
				echo <<<HTML
					<input id="mt-field-{$slug}" class="{$class_name}" name="{$slug}" value="{$meta_value}" type="url" />
				HTML;
				break;
			case "textarea" :
				echo <<<HTML
					<textarea id="{$slug}" class="{$class_name}" name="{$slug}">{$meta_value}</textarea>
				HTML;
				break;
			case "select" :
				echo '<select class="' . $class_name . '" name="' . $slug . '" id="' . $slug . '">';
					foreach($options as $option) :
						$selected = selected($meta_value, $option);
						echo
						<<<HTML
							<option	value="{$option}" {$selected}>{$option}</option>
						HTML;
					endforeach;
				echo "</select>";
				break;
			case "group" :
				echo '<div class="group ' . $class_name . '" name="' . $slug . '" id="' . $slug . '">';
					foreach ($this->args['fields'] as $key => $field) {
						$field_object = new mt_meta_field( $field, true );
						$field_object->args['slug'] = $this->args['slug'] . "__" . $field['slug'];
						$field_object->create_field_html();
					}
				echo "</div>";
				break;
			case "repeater" :
				$repeater_json 	= get_post_meta( get_the_ID(), $slug, true ) ? get_post_meta( get_the_ID(), $slug, true ) : '[0]';
				$repeater_ids	= json_decode( $repeater_json ); //array( 0, 1, 3 );
					echo '<div class="repeater ' . $class_name . '" id="' . $slug . '">';

						foreach ( $repeater_ids as $key => $id ) {
							echo '<div class="repeater__item" id="' . $slug . "_" . $id . '">';
								foreach ( $this->args['fields'] as $key => $field ) {
									$field_object = new mt_meta_field( $field, true );
									$field_object->args['slug'] = $this->args['slug'] . "_" . $id . "__" . $field['slug'];
									$field_object->create_field_html();
								}
							echo "</div>";
						}

						echo '<input type="hidden" name="' . $slug . '" id="' . $slug . '" value="' . $repeater_json . '"/>';
						echo '<button class="repeater__btn btn">Add</button>';
					echo "</div>";
				break;
		}
	}
}

function mt_get_field( $meta_key, $post_id = false ) {
	if( !$post_id ) $post_id = get_the_ID();
	return get_post_meta( $post_id, $meta_key, true );
}
