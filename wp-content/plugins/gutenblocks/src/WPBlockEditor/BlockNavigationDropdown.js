import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockNavigationDropdown,
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-navigation-dropdown";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( "Block Navigation Dropdown", 'wp-gb' ),
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
				<BlockNavigationDropdown
					isDisabled={false}
				/>
			</div>
		)
	},
} );
