import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

import {
	Icon,
} from '@wordpress/components';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "block-variation-picker";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		icon: {
			type: "string",
			default: ""
		},
	},

	edit: ( {attributes, setAttributes} ) => {

		const icons = {
			bed: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 19v-7h-23v-7h-1v14h1v-2h22v2h1zm-20-12c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm19 4c0-1.657-1.343-3-3-3h-13v3h16z"/></svg>,
			layout: "layout",
			smiley: "smiley",
			columns: "columns",
			globe: "admin-site"
		}

		return (
			<div { ...useBlockProps() }>
				{ attributes.icon ?
				<Icon icon={icons[attributes.icon]} /> :
				<BlockVariationPicker
					icon="smiley"
					label={__( 'Choose variation' )}
					instructions={__( 'Select a variation to start with.' )}
					onSelect={(variation) => setAttributes({ icon: variation.name})}
					variations={[
						{
							name: "bed",
							description: "An icon of a bed.",
							title: "Bed",
							icon: icons["bed"]
						},
						{
							name: "layout",
							description: "An icon of a layout.",
							title: "Layout",
							icon: icons["layout"]
						},
						{
							name: "smiley",
							description: "An icon of a smiley.",
							title: "Smiley",
							icon: icons["smiley"]
						},
						{
							name: "columns",
							description: "An icon of a columns.",
							title: "Columns",
							icon: icons["columns"]
						},
						{
							name: "global",
							description: "An icon of a globe.",
							title: "Globe",
							icon: icons["globe"]
						},
					]}
				/> }
			</div>
		)
	},
} );
