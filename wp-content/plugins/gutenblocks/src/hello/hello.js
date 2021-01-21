import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

registerBlockType( 'gutenblocks/hello', {

	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */

	apiVersion: 2,
	title: __( 'Hello', 'gutenblocks' ),
	description: __('A simple block where you can write something'),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		html: false,
	},
	attributes: {
		text: {
			type: "string",
		}
	},

	edit: (props) => {
		const onTextChange = (newValue) => props.setAttributes( { text: newValue } )

		return (
			<p { ...useBlockProps() }>
				<RichText onChange={ onTextChange } value={ props.attributes.text } />
			</p>
		);
	},

	save: (props) => {
		return (
			<p { ...useBlockProps.save() }>
				<RichText.Content value={ props.attributes.text } />
			</p>
		);
	},
} );
