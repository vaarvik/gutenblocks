import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

const BLOCKNAME = "link-control";
const BLOCKPATH = `wp-gb/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
	apiVersion: 2,
	title: __( BLOCKNAME.replace("-", " ").toUpperCase(), 'wp-gb' ),
	description: __( 'The description' ),
	category: 'wp-gb',
	icon: 'smiley',
	attributes: {
		post: {
			type: "object",
		}
	},

	edit: ( {attributes, setAttributes} ) => {
		return (
			<div { ...useBlockProps() }>
				<LinkControl
					searchInputPlaceholder="Search here..."
					value={ attributes.post }
					settings={[
						{
							id: 'opensInNewTab',
							title: 'New tab?',
						},
						{
							id: 'customDifferentSetting',
							title: 'Has this custom setting?'
						}
					]}
					onChange={ ( newPost ) => setAttributes( { post: newPost } ) }
					withCreateSuggestion={true}
					createSuggestion={ (inputValue) => setAttributes( { post: {
						...attributes.post,
						title: inputValue,
						type: "custom-url",
						id: Date.now(),
						url: inputValue
					} } ) }
					createSuggestionButtonText={ (newValue) => `${__("New:")} ${newValue}` }
				>
				</LinkControl>
			</div>
		)
	},
} );
