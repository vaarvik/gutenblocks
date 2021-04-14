import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RadioControl, PanelBody } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "inspector-controls";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		align: {
			type: "string",
			default: 'left'
		}
	},

	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<PanelBody>
						<RadioControl
							label="Align"
							help="Choose an alignment."
							selected={ attributes.align }
							options={ [
								{ label: 'Left', value: 'left' },
								{ label: 'Center', value: 'center' },
								{ label: 'Right', value: 'right' },
							] }
							onChange={ ( newAlign ) => setAttributes( { align: newAlign } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		)
	},
} );
