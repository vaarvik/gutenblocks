import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "color-gradient-control";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		colorValue: {
			type: "string",
			default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
		},
		gradientValue: {
			type: "string",
			default: '#f00'
		},
	},

	edit: ( {attributes, setAttributes} ) => {
		return (
			<div { ...useBlockProps() }>
				<ColorGradientControl
					colorValue={ attributes.colorValue }
					gradientValue={ attributes.gradientValue }
					colors={ [
						{ name: 'red', color: '#f00' },
						{ name: 'white', color: '#fff' },
						{ name: 'blue', color: '#00f' },
					] }
					gradients={[
						{
							name: 'Vivid cyan blue to vivid purple',
							gradient:
								'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
							slug: 'vivid-cyan-blue-to-vivid-purple',
						},
						{
							name: 'Light green cyan to vivid green cyan',
							gradient:
								'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
							slug: 'light-green-cyan-to-vivid-green-cyan',
						},
						{
							name: 'Luminous vivid amber to luminous vivid orange',
							gradient:
								'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
							slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
						},
					]}
					label={ __("Choose a color or a gradient") }
					onColorChange={ (newValue) => setAttributes({ colorValue: newValue }) }
					onGradientChange={ (newValue) => setAttributes({ gradientValue: newValue }) }
				/>
			</div>
		)
	},
} );
