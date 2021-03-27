import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inner-blocks-passing-props";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Inner Blocks (passing props)', 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		blockTitle: {
			type: "string",
			default: __( 'Parent Title (given here)', 'wp-gb' ),
		}
	},
	providesContext: {
		'parentTitle': 'blockTitle',
	},


	edit: ({attributes, setAttributes}) => {

		const TEMPLATE = [ [ 'wp-gb/child-block', {} ] ];

		return (
			<div { ...useBlockProps() }>
				<h1>Block title:</h1>
				<TextControl
					value={attributes.blockTitle}
					onChange={(newValue) => {
						setAttributes({blockTitle: newValue})
					}}
				/>
				<InnerBlocks template={ TEMPLATE } />
			</div>
		)
	}
} );

registerBlockType( "wp-gb/child-block", {
	apiVersion: 2,
	title: __( 'Child Block', 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	usesContext: [ 'parentTitle' ],

	edit: ({context}) => {

		return (
			<div { ...useBlockProps() }>
				<h2>{context['parentTitle']}</h2>
			</div>
		)
	}
} );
