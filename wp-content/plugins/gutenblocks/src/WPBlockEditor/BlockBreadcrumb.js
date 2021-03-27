import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockBreadcrumb
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-breadcrumb";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',

	edit: ( {attributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<BlockBreadcrumb />
			</div>
		)
	},
} );
