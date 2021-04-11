import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import {
	useBlockProps,
	InspectorAdvancedControls
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inspector-advanced-controls";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		user: {
			type: "string",
			default: null
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<InspectorAdvancedControls>
					<SelectControl
						label={ __( 'Select a user' ) }
						value={ attributes.user }
						onChange={ ( user ) => setAttributes( { user } ) }
						options={ [
							{ value: null, label: 'Select a user', disabled: !!attributes.user },
							{ value: 'andy', label: 'Andy' },
							{ value: 'betty', label: 'Betty' },
							{ value: 'charlie', label: 'Charlie' },
						] }
					/>
				</InspectorAdvancedControls>
			</div>
		)
	},
} );
