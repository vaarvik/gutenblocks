
import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';


const BLOCKNAME = "autocomplete";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		value: {
			type: "string"
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		const autoConfigs = [
			{
				name: "Autocomplete",
				// The prefix that triggers this completer
				triggerPrefix: "/",
				// The option data
				options: [
					{ value: '🍎', label: 'Apple', id: 1 },
					{ value: '🍊', label: 'Orange', id: 2 },
					{ value: '🍇', label: 'Grapes', id: 3 },
				],
				// Returns a label for an option like "🍊 Orange"
				getOptionLabel: option => (
					<span>
						<span className="icon" >{ option.value }</span> { option.label }
					</span>
				),
				// Declares that options should be matched by their name or value
				getOptionKeywords: option => [ option.label, option.value ],
				// Declares that the Grapes option is disabled
				getOptionCompletion: option => (
					<abbr title={ option.label }>{ option.value }</abbr>
				),
			}
		];

		return (
			<div { ...useBlockProps() }>
				<RichText
					autocompleters={ autoConfigs }
					value={attributes.value}
					onChange={ ( newValue ) => {
						setAttributes( { value: newValue } );
					} }
					placeholder={ __(`Type ${autoConfigs[0].triggerPrefix} to choose a ${autoConfigs[0].name}`) }
				/>
			</div>
		)
	},
} );
