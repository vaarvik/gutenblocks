import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inner-blocks-appender";
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
	title: __( 'Inner Blocks With Appender', 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',

	edit: (props) => {
		const ALLOWED_BLOCKS = [
			'core/button'
		];

		const TEMPLATE = [ [ 'core/button' ] ];

		return (
			<div { ...useBlockProps({ style: STYLES	}) }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					orientation="vertical"
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender />
					) }
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
