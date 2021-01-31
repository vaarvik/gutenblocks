/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import  {
	__experimentalTreeGrid as TreeGrid,
   __experimentalTreeGridRow as TreeGridRow,
   __experimentalTreeGridCell as TreeGridCell,
   __experimentalTreeGridItem as TreeGridItem,
   Button
} from '@wordpress/components';

export default { title: 'Components/TreeGrid', component: TreeGrid };

const groceries = [
	{
		name: 'Fruit',
		types: [
			{
				name: 'Apple',
			},
			{
				name: 'Orange',
			},
			{
				name: 'Pear',
			},
		],
	},
	{
		name: 'Vegetable',
		types: [
			{
				name: 'Cucumber',
				types: [
					{
						name: 'Cucruper',
					},
					{
						name: 'Cucrumba',
					},
				]
			},
			{
				name: 'Parsnip',
			},
			{
				name: 'Pumpkin',
			},
		],
	},
];

const Descender = ( { level } ) => {
	if ( level === 1 ) {
		return '';
	}
	const indentation = '\u00A0'.repeat( ( level - 1 ) * 4 );

	return <span aria-hidden="true">{ indentation + '├ ' }</span>;
};

const Rows = ( { items, level = 1 } ) => {
	return items.map( ( item, index ) => {
		const hasChildren = !! item.types && !! item.types.length;
		return (
			<Fragment key={ item.name }>
				<TreeGridRow
					positionInSet={ index + 1 }
					setSize={ items.length }
					level={ level }
				>
					<TreeGridCell>
						{ ( props ) => (
							<>
								<Descender level={ level } />
								<Button isPrimary { ...props }>
									{ item.name }
								</Button>
							</>
						) }
					</TreeGridCell>
					<TreeGridCell>
						{ ( props ) => (
							<Button isSecondary { ...props }>
								Move Up
							</Button>
						) }
					</TreeGridCell>
					<TreeGridCell>
						{ ( props ) => (
							<Button isSecondary { ...props }>
								Move Down
							</Button>
						) }
					</TreeGridCell>
				</TreeGridRow>
				{ hasChildren && (
					<Rows items={ item.types } level={ level + 1 } />
				) }
			</Fragment>
		);
	} );
};

export const _default = () => {
	return (
		<TreeGrid>
			<Rows items={ groceries } />
		</TreeGrid>
	);
};
