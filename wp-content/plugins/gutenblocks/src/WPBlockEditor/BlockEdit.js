import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockEdit,
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-edit";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		align: {
			type: "string",
		},
		content: {
			type: "string",
		},
	},

	edit: ( {attributes, setAttributes, clientId, isSelected} ) => {
		return (
			<div { ...useBlockProps() }>
				<BlockEdit
					name="wp-gb/block-alignment-control"
					attributes={ { align: attributes.align } }
					setAttributes={ setAttributes }
					clientId={clientId}
					isSelected={isSelected}
				/>
				<BlockEdit
					name="core/button"
					attributes={ { content: attributes.content } }
					setAttributes={ setAttributes }
					clientId={clientId}
					isSelected={isSelected}
				/>
				<BlockEdit
					name="wp-gb/block-colors-style-selector"
					attributes={ {} }
					clientId={clientId}
					isSelected={isSelected}
				/>
			</div>
		)
	},
} );
