import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, __experimentalUseInnerBlocksProps as useInnerBlocksProps } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inner-blocks-with-inner-block-props";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

const STYLES = {
	minHeight: 100,
	padding: "48px 48px 0 48px",
	color: "black"
};


registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( 'Inner Blocks With Inner Block Props', 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',

	edit: (props) => {
		const ALLOWED_BLOCKS = [
			'core/paragraph',
			'core/image',
		];

		const TEMPLATE = [ [ 'core/paragraph', {
				placeholder: 'Enter side content...'
		} ], [ 'core/image', {} ] ];

		const blockProps = useBlockProps({ style: STYLES });

		const innerBlockProps = useInnerBlocksProps( {
			ref: blockProps.ref,
			className: "unique-class"
		}, {
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
		});

		return (
			<div { ...blockProps }>
				<div { ...innerBlockProps }>
					{ innerBlockProps.children }
				</div>
			</div>
		)
	},

	save: (props) => {
		return (
			<div { ...useBlockProps.save({ style: STYLES }) }>
				<div className="unique-class">
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} );
