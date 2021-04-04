import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockVerticalAlignmentToolbar
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-vertical-align";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		verticalAlign: {
			type: "string",
			default: "center"
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps( {style: { backgroundPosition: `center ${attributes.verticalAlign}` } } ) }>
				<BlockVerticalAlignmentToolbar
					value={ attributes.verticalAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { verticalAlign: nextAlign } );
					} }
				/>
			</div>
		)
	},
} );
