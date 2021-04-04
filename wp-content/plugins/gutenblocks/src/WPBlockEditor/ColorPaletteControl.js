import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	ColorPaletteControl
 } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "color-palette-control";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		colorValue: {
			type: "string",
			default: "#000"
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<ColorPaletteControl
					value={ attributes.colorValue }
					onChange={ (newValue) => setAttributes({colorValue: newValue}) }
				/>
			</div>
		)
	},
} );
