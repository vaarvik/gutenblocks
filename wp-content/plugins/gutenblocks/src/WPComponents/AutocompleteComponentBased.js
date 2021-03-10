import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Autocomplete from '../components/Autocomplete/Autocomplete';

import { RichText, useBlockProps } from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "autocomplete-component-based";
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
		return (
			<div { ...useBlockProps() }>
				<Autocomplete
					name="Autocomplete"
					options={ [
						{ value: '🍎', label: 'Apple', id: 1 },
						{ value: '🍊', label: 'Orange', id: 2 },
						{ value: '🍇', label: 'Grapes', id: 3 },
					] }
					value={ attributes.value }
					onChange={ ( newValue ) => {
						setAttributes( { value: newValue } );
					} }
				/>
			</div>
		)
	},

	save: ( {attributes} ) => (
		<div { ...useBlockProps.save() }>
			<RichText.Content value={ attributes.value } />
		</div>
	)
} );
