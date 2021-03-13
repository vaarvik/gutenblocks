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
		$args['full-slug'] = $args['slug'];
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
			$field['full-slug'] = $args['full-slug'] . "__" . $field['slug'];
			$args['fields'][$key]['full-slug'] = $field['full-slug'];
			$this->save_field( $post_id, $field['full-slug'] );
			if( !empty( $field['fields'] ) ) {
				if( $field['type'] === "repeater" ) {
					$this->save_repeater_field( $post_id, $field );
				} elseif( $field['type'] === "group" ) {
					$this->save_group_field( $post_id, $field );
				}
			}
		}
	}

	public function save_repeater_field( $post_id, $args = null ) {
		if( !$args ) $args = $this->args;
		foreach ( $args['fields'] as $key => $field ) {
			$repeater_json 	= get_post_meta( $post_id, $args['full-slug'], true ) ? get_post_meta( get_the_ID(), $args['full-slug'], true ) : '[0]';
			$repeater_ids	= json_decode( $repeater_json );
			foreach ( $repeater_ids as $id ) {
				$field['full-slug'] = $args['full-slug'] . "_" . $id . "__" . $field['slug'];
				$args['fields'][$key]['full-slug'] = $field['full-slug'];
				$this->save_field( $post_id, $field['full-slug'] );
				if( !empty( $field['fields'] ) ) {
					if( $field['type'] === "repeater" ) {
						$this->save_repeater_field( $post_id, $field );
					} elseif( $field['type'] === "group" ) {
						$this->save_group_field( $post_id, $field );
					}
				}
			}
		}
		// die;
	}

	public function create_field( $post_type ) {
		add_meta_box( $this->args['slug'], $this->args['title'], [ $this, 'create_field_html' ], $this->args['location'] );
	}

	public function save_field( $post_id, $slug = null ) {
		if( !$slug ) $slug = $this->args['full-slug'];
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
		$meta_value 	= get_post_meta( get_the_ID(), $this->args['full-slug'], true );
		$class_name 	= $this->args['class'];
		$mini_slug		= $this->args['slug'];
		$slug			= $this->args['full-slug'];
		$options		= $this->args['options'] ?? null;
		switch ( $this->args['type'] ) {
			case "input" :
				echo <<<HTML
					<input id="{$slug}" class="{$class_name}" name="{$slug}" value="{$meta_value}" data-slug="{$mini_slug}" />
				HTML;
				break;
			case "url" :
				$meta_value = esc_url( $meta_value );
				echo <<<HTML
					<input id="mt-field-{$slug}" class="{$class_name}" name="{$slug}" value="{$meta_value}" type="url" data-slug="{$mini_slug}" />
				HTML;
				break;
			case "textarea" :
				echo <<<HTML
					<textarea id="{$slug}" class="{$class_name}" name="{$slug}" data-slug="{$mini_slug}">{$meta_value}</textarea>
				HTML;
				break;
			case "select" :
				echo '<select class="' . $class_name . '" name="' . $slug . '" id="' . $slug . '" data-slug="' . $mini_slug . '">';
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
				echo '<div class="group ' . $class_name . '" name="' . $slug . '" id="' . $slug . '" data-slug="' . $mini_slug . '">';
					foreach ($this->args['fields'] as $key => $field) {
						$field_object = new mt_meta_field( $field, true );
						$field_object->args['full-slug'] = $this->args['full-slug'] . "__" . $field['slug'];
						$field_object->create_field_html();
					}
				echo "</div>";
				break;
			case "repeater" :
				$repeater_json 	= get_post_meta( get_the_ID(), $slug, true ) ? get_post_meta( get_the_ID(), $slug, true ) : '[0]';
				$repeater_ids	= json_decode( $repeater_json ); //array( 0, 1, 3 );
					echo '<div class="repeater ' . $class_name . '" id="' . $slug . '" data-slug="' . $mini_slug . '">';

						foreach ( $repeater_ids as $key => $id ) {
							echo '<div class="repeater__item" id="' . $slug . "_" . $id . '">';
								foreach ( $this->args['fields'] as $key => $field ) {
									$field_object = new mt_meta_field( $field, true );
									$field_object->args['full-slug'] = $this->args['full-slug'] . "_" . $id . "__" . $field['slug'];
									$field_object->create_field_html();
								}
							echo "</div>";
						}

						echo '<input type="hidden" name="' . $slug . '" id="' . $slug . '-info" value="' . $repeater_json . '"/>';
						echo '<button class="repeater__btn btn" id="' . $slug . '-add-btn">Add</button>';
						echo '<button class="repeater__btn btn" id="' . $slug . '-remove-btn">Remove</button>';
					echo "</div>";
				break;
		}
	}
}

function mt_get_field( $meta_key, $post_id = false ) {
	if( !$post_id ) $post_id = get_the_ID();
	return get_post_meta( $post_id, $meta_key, true );
}
