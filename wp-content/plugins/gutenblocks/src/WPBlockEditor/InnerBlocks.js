import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inner-blocks";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

const STYLES = {
	boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.4)",
	minHeight: 100,
	padding: "48px 48px 0 48px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "white",
	color: "black"
};

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Inner Blocks', 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',

	edit: (props) => {
		const ALLOWED_BLOCKS = [
			'core/image',
			'core/paragraph',
			'core/columns',
			'core/heading',
			'wp-gb/inner-blocks'
		];

		const TEMPLATE = [ [ 'core/columns', {}, [
			[ 'core/column', {}, [
				[ 'core/image' ],
			] ],
			[ 'core/column', {}, [
				[ 'core/heading', {
					level: 3,
					placeholder: 'Enter side title...'
				} ],
				[ 'core/paragraph', {
					placeholder: 'Enter side content...'
				} ],
			] ],
		] ] ];

		return (
			<div { ...useBlockProps({ style: STYLES	}) }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
				/>
			</div>
		)
	},

	save: (props) => {
		return (
			<div { ...useBlockProps.save({ style: STYLES }) }>
				<div>
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} );
