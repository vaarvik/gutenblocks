import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	ContrastChecker
 } from '@wordpress/block-editor';

import {
	ColorIndicator
 } from '@wordpress/components';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "contrast-checker";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		textColor: {
			type: "string",
			default: "#ccc"
		},
		backgroundColor: {
			type: "string",
			default: "#fff"
		},
		fontSize: {
			type: "number",
			default: 26
		},
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<p>
					<ColorIndicator
						colorValue={ attributes.textColor }
					/> <strong>Text color:</strong> {attributes.textColor}<br/>

					<ColorIndicator
						colorValue={ attributes.backgroundColor }
					/> <strong>Background color:</strong> {attributes.backgroundColor}<br/>

					<strong>Font size:</strong> {attributes.fontSize}
				</p>
				<ContrastChecker
					backgroundColor={attributes.backgroundColor}
					fontSize={attributes.fontSize}
					textColor={attributes.textColor}
				/>
			</div>
		)
	},
} );
