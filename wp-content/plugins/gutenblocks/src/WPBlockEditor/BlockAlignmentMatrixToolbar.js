import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-alignment-matrix-toolbar";
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
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps( { style: { backgroundPosition: attributes.align } } ) }>
				<BlockAlignmentMatrixToolbar
					label={__( 'Change matrix alignment' )}
					value={ attributes.align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</div>
		)
	},
} );
