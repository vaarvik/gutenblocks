<?php

add_filter('comment_form_default_fields', function( $fields ) {

	foreach ($fields as $key => $value) {

		$field_type = $key;

		if( $key === "url" ) $field_type = __( "website" );

		if( $key === "cookies")
			$fields[$key] = '<p class="form__' . $field_type . '"><input id="comment-form-' . $field_type . '" name="' . $key . '" type="checkbox" value="yes"> <label for="comment-form-' . $field_type . '">' . __("Save my name, email, and website in this browser for the next time I comment.") . '</label></p>';
		else
			$fields[$key] = '<p class="form__' . $field_type . '"><label for="' . $key . '">'. __( ucfirst( $field_type ) ) . ' <span class="label__text red">*</span></label> <input class="field input" id="comment-form-' . $field_type . '" name="' . $key . '" type="' . ( $field_type === "email" ? "email" : "text" ) . '" value="" size="30" maxlength="100" aria-describedby="' . $field_type . '-notes" required="required"></p>';

	}

	return $fields;

});

comment_form(
	array(
		'id_form'				=> 'comment-form',
		'class_container'	 	=> 'comment-form',
		'class_form'         	=> 'form',
		'title_reply_before' 	=> '<h2 id="comment-form-title" class="form__title">',
		'title_reply_after'  	=> '</h2>',
		'comment_notes_before'	=> '<p class="form__note"><span id="comment-form-note">' . __("Your email address will not be published.") . '</span>',
		'comment_notes_after'	=> '</p>',
		'comment_field'		 	=> '<p class="form__comment"><label for="comment">Kommentar</label> <textarea class="field textarea" id="comment-form-comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p>',
		'submit_button'		 	=> '<input name="comment-form-submit" type="submit" id="comment-form-submit" class="btn primary" value="%4$s" />',
		'submit_field'		 	=> '<p class="form__submit">%1$s %2$s</p>',
		'class_submit'		 	=> 'form__submit',
	)
);
