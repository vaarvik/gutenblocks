import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalImageSizeControl as ImageSizeControl
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "image-size-control";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		imageWidth: {
			type: "number",
			default: 200
		},
		imageHeight: {
			type: "number",
			default: 200
		},
		dimensionWidth: {
			type: "number",
			default: 200
		},
		dimensionHeight: {
			type: "number",
			default: 200
		},
	},

	edit: ( {attributes, setAttributes} ) => {
		return (
			<div { ...useBlockProps() }>
				<ImageSizeControl
					width={ attributes.dimensionWidth }
					height={ attributes.dimensionHeight }
					imageWidth={ attributes.imageWidth }
					imageHeight={ attributes.imageHeight }
					imageSizeOptions={ [
						{ value: '{"width":"200","height":"200"}', label: '200/200' },
						{ value: '{"width":"100","height":"300"}', label: '100/300' },
						{ value: '{"width":"400","height":"800"}', label: '400/800' },
					] }
					slug={ JSON.stringify({
						width: attributes.imageWidth.toString(),
						height: attributes.imageHeight.toString()
					}) }
					onChange={ (dimensionSizes) => setAttributes({
						dimensionWidth: dimensionSizes.width ?? attributes.dimensionWidth,
						dimensionHeight: dimensionSizes.height ?? attributes.dimensionHeight
					}) }
					onChangeImage={ (imageSizes) => setAttributes({
						imageWidth: parseFloat(JSON.parse(imageSizes).width),
						imageHeight: parseFloat(JSON.parse(imageSizes).height),
						dimensionWidth: parseFloat(JSON.parse(imageSizes).width),
						dimensionHeight: parseFloat(JSON.parse(imageSizes).height)
					}) }
				/>
			</div>
		)
	},
} );
