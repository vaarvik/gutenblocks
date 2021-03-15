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
			$repeater_json 	= isset( $_POST[$args['full-slug']] ) ? $_POST[$args['full-slug']] : '[0]';
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

	public function create_field_html( $post = false, $args = false, $is_reference = false ) {
		$meta_value 	= get_post_meta( get_the_ID(), $this->args['full-slug'], true );
		$meta_value 	= esc_attr( $meta_value );
		$field_classes 	= $this->args['field-classes'] ?? [];
		$label_classes 	= $this->args['label-classes'] ?? [];
		$mini_slug		= $this->args['slug'];
		$slug			= !$is_reference ? $this->args['full-slug'] : $this->args['full-slug'] . "-reference";
		$options		= $this->args['options'] ?? [];
		$title			= $this->args['title'] ?? null;

		if( is_string( $field_classes ) ) {
			$field_classes = explode( " ", $field_classes );
		}
		array_push( $field_classes, "mt-field" );
		$field_classes = implode( " ", $field_classes );

		if( is_string( $label_classes ) ) {
			$label_classes = explode( " ", $label_classes );
		}
		array_push( $label_classes, "mt-label" );
		$label_classes = implode( " ", $label_classes );

		switch ( $this->args['type'] ) {
			case "input" :
				echo <<<HTML
					<input id="{$slug}" class="{$field_classes}" name="{$slug}" value="{$meta_value}" data-slug="{$mini_slug}" />
					<label for="{$slug}" class="{$label_classes}" data-slug="{$mini_slug}">{$title}</label>
				HTML;
				break;
			case "url" :
				$meta_value = esc_url( $meta_value );
				echo <<<HTML
					<input id="mt-field-{$slug}" class="{$field_classes}" name="{$slug}" value="{$meta_value}" type="url" data-slug="{$mini_slug}" />
					<label for="{$slug}" class="{$label_classes}" data-slug="{$mini_slug}">{$title}</label>
				HTML;
				break;
			case "textarea" :
				echo <<<HTML
					<textarea id="{$slug}" class="{$field_classes}" name="{$slug}" data-slug="{$mini_slug}">{$meta_value}</textarea>
					<label for="{$slug}" class="{$label_classes}" data-slug="{$mini_slug}">{$title}</label>
				HTML;
				break;
			case "select" :
				echo "<select class='{$field_classes}' name='{$slug}' id='{$slug}' data-slug='{$mini_slug}'>";
					foreach($options as $option) :
						$selected = selected($meta_value, $option);
						echo
						<<<HTML
							<option	value="{$option}" {$selected}>{$option}</option>
						HTML;
					endforeach;
				echo "</select>";
				echo "<label for='{$slug}' class='{$label_classes}'>{$title}</label>";
				break;
			case "group" :
				echo "<div class='mt-group {$field_classes}' id='{$slug}' data-slug='{$mini_slug}'>";
					foreach ($this->args['fields'] as $key => $field) {
						$field_object = new mt_meta_field( $field, true );
						$field_object->args['full-slug'] = $this->args['full-slug'] . "__" . $field['slug'];
						$field_object->create_field_html( false, false, $is_reference );
					}
				echo "</div>";
				break;
			case "repeater" :
				$repeater_json 	= get_post_meta( get_the_ID(), $slug, true ) ? get_post_meta( get_the_ID(), $slug, true ) : '[0]';
				$repeater_ids	= json_decode( $repeater_json );
				echo "<div class='mt-repeater {$field_classes}' id='{$slug}' data-slug='{$mini_slug}'>";
					echo "<p for='{$slug}' class='mt-label {$label_classes}' data-slug='{$mini_slug}'>{$title}</p>";
					foreach ( $repeater_ids as $i => $id ) {
						$repeater_slug = !$is_reference ? "{$slug}_{$id}" : "{$this->args['full-slug']}_{$id}-reference";
						$i = $i + 1; //make $i start at 1 instead of 0
						echo "<div class='mt-repeater__item' id='{$slug}_{$id}' data-slug='{$mini_slug}_{$id}' data-item-id='{$id}' data-item-key='{$i}'>";
						foreach ( $this->args['fields'] as $j => $field ) {
								$field_object = new mt_meta_field( $field, true );
								$field_object->args['full-slug'] = $this->args['full-slug'] . "_" . $id . "__" . $field['slug'];
								$field_object->create_field_html( false, false, $is_reference );
							}
						echo "</div>";
					}

					echo <<<HTML
						<input type='hidden' class='mt-repeater__info' name='{$slug}' id='{$slug}-info' value='{$repeater_json}' data-slug='info' data-start-value='{$repeater_json}'/>
						<button class="mt-repeater__btn btn" id="{$slug}-add-btn" data-slug="add-btn">Add</button>
						<button class="mt-repeater__btn btn" id="{$slug}-remove-btn" data-slug="remove-btn">Remove</button>
					HTML;

					$repeater_slug = !$is_reference ? "{$slug}-reference" : "{$this->args['full-slug']}-reference";
					echo "<div class='mt-repeater__item mt-reference' id='{$repeater_slug}' data-slug='{$mini_slug}'>";
						foreach ( $this->args['fields'] as $key => $field ) {
							$field_object = new mt_meta_field( $field, true );
							$field_object->args['full-slug'] = $this->args['full-slug'] . "_" . $id . "__" . $field['slug'];
							$field_object->create_field_html( false, false, true );
						}
					echo "</div>";

				echo "</div>";

				break;
		}
	}
}

function mt_get_field( $meta_key, $post_id = false ) {
	if( !$post_id ) $post_id = get_the_ID();
	return get_post_meta( $post_id, $meta_key, true );
}
