import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	__experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
	BlockAlignmentToolbar
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-controls";
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
			default: "center center"
		},
		textAlign: {
			type: "string",
			default: "left"
		}
	},

	edit: ( {attributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<BlockControls>
					<BlockAlignmentMatrixToolbar
						label={__( 'Change matrix alignment' )}
						value={ attributes.align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>
					<BlockAlignmentToolbar
						value={ attributes.textAlign }
						onChange={ ( nextAlign ) => {
							setAttributes( { textAlign: nextAlign } );
						} }
					/>
				</BlockControls>
			</div>
		)
	},
} );
