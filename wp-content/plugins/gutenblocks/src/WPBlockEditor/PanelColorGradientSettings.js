import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "panel-color-gradient-settings";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		colorValue1: {
			type: "string",
			default: '#00f'
		},
		gradientValue1: {
			type: "string",
			default: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)'
		},
		colorValue2: {
			type: "string",
			default: '#f00'
		},
		gradientValue2: {
			type: "string",
			default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
		},
	},

	edit: ( {attributes, setAttributes} ) => {
		return (
			<div { ...useBlockProps() }>
				<PanelColorGradientSettings
					title={ __("All ColorGradientControls") }
					settings={ [ {
						colorValue: attributes.colorValue1,
						gradientValue: attributes.gradientValue1,
						colors:[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						],
						gradients:[
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
						],
						label:__("Choose a color or a gradient"),
						onColorChange:(newValue) => setAttributes({colorValue1: newValue }),
						onGradientChange:(newValue) => setAttributes({gradientValue1: newValue }),
					},
					{
						colorValue: attributes.colorValue2,
						gradientValue: attributes.gradientValue2,
						colors:[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						],
						gradients:[
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
						],
						label:__("Choose a color or a gradient"),
						onColorChange:(newValue) => setAttributes({colorValue2: newValue }),
						onGradientChange:(newValue) => setAttributes({gradientValue2: newValue }),
					} ] }
				>
					<p>...Any child in the bottom of the component</p>
				</PanelColorGradientSettings>
			</div>
		)
	},
} );
