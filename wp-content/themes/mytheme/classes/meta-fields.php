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

		if( !$is_inner_field ) {
			add_action( 'add_meta_boxes', [ $this, 'create_field' ] );

			add_action( 'save_post', function( $post_id ) {
				$this->save_field( $post_id );
			} );
		}

		//saving values for repeaters and groups
		if( !empty( $this->args['fields'] ) ) {
			foreach ( $this->args['fields'] as $key => $field ) {
				$field['slug']	= $this->args['slug'] . "__" . $field['slug'];
				$field 			= new mt_meta_field( $field, true );
				$this->args['fields'][$key] = $field;
				add_action( 'save_post', function( $post_id ) use ( $field ) {
					$field->save_field( $post_id );
				} );
			}
		}
	}

	public function create_field( $post_type ) {
		add_meta_box( $this->args['slug'], $this->args['title'], [ $this, 'create_field_html' ], $this->args['location'] );
	}

	public function save_field( $post_id ) {
		if( isset( $_POST[$this->args['slug']] ) ) {
			$meta_value = sanitize_text_field( $_POST[$this->args['slug']] );
			if( $meta_value ) {
				update_post_meta( $post_id, $this->args['slug'], $meta_value );
			}
			else {
				$old_meta_value = get_post_meta( get_the_ID(), $this->args['slug'], true );
				delete_post_meta( $post_id, $this->args['slug'], $old_meta_value );
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
			case "repeater" :
				echo '<div class="repeater ' . $class_name . '" name="' . $slug . '" id="' . $slug . '">';
					foreach ($this->args['fields'] as $key => $field) {
						$field->create_field_html();
					}
				echo "</div>";
				break;
		}
	}
}

function mt_get_field( $meta_key, $post_id = false ) {
	if( !$post_id ) $post_id = get_the_ID();
	return get_post_meta( $post_id, $meta_key, true );
}
