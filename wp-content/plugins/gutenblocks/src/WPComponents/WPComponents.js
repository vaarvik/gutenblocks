import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import { Fragment, useState } from '@wordpress/element';

import {
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
	trash,
} from '@wordpress/icons';

import Autocomplete from "../components/Autocomplete/Autocomplete"
import {_default as DraggalbeExample} from "./draggable";
import MyFormTokenField from "./MyFormTokenField";
import MyQueryControls from "./MyQueryControls";
import {_default as MyTreeGrid} from "./MyTreeGrid";

// Components
import  {  __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import  {
	 Animate,
	getAnimateClassName as __unstableGetAnimateClassName,
} from '@wordpress/components';
import  {  AnglePickerControl } from '@wordpress/components';
import  {  BaseControl } from '@wordpress/components';
import  {  __experimentalBoxControl as BoxControl } from '@wordpress/components';
import  {  Button } from '@wordpress/components';
import  {  ButtonGroup } from '@wordpress/components';
import  {  Card } from '@wordpress/components';
import  {  CardBody } from '@wordpress/components';
import  {  CardDivider } from '@wordpress/components';
import  {  CardFooter } from '@wordpress/components';
import  {  CardHeader } from '@wordpress/components';
import  {  CardMedia } from '@wordpress/components';
import  {  CheckboxControl } from '@wordpress/components';
import  {  ClipboardButton } from '@wordpress/components';
import  {  __experimentalColorEdit as ColorEdit } from '@wordpress/components';
import  {  ColorIndicator } from '@wordpress/components';
import  {  ColorPalette } from '@wordpress/components';
import  {  ColorPicker } from '@wordpress/components';
import  {  ComboboxControl } from '@wordpress/components';
import  {  CustomSelectControl } from '@wordpress/components';
import  {  Dashicon } from '@wordpress/components';
import  {  DateTimePicker, DatePicker, TimePicker } from '@wordpress/components';
import  {  __experimentalDimensionControl as DimensionControl } from '@wordpress/components';
import  {  Disabled } from '@wordpress/components';
import  {  Draggable } from '@wordpress/components';
import  {
	 DropZone,
	useDropZone as __unstableUseDropZone,
} from '@wordpress/components';
import  {
	 DropZoneProvider,
	DropZoneContextProvider as __unstableDropZoneContextProvider,
	useDrop as __unstableUseDrop,
} from '@wordpress/components';
import  {  Dropdown } from '@wordpress/components';
import  {  DropdownMenu } from '@wordpress/components';
import  {  ExternalLink } from '@wordpress/components';
import  {  Flex } from '@wordpress/components';
import  {  FlexBlock } from '@wordpress/components';
import  {  FlexItem } from '@wordpress/components';
import  {  FocalPointPicker } from '@wordpress/components';
import  {  FocusableIframe } from '@wordpress/components';
import  {  FontSizePicker } from '@wordpress/components';
import  {  FormFileUpload } from '@wordpress/components';
import  {  FormToggle } from '@wordpress/components';
import  {  FormTokenField } from '@wordpress/components';
import  {  __experimentalGradientPicker as GradientPicker } from '@wordpress/components';
import  {  __experimentalCustomGradientPicker as CustomGradientPicker } from '@wordpress/components';
import  {  Guide } from '@wordpress/components';
import  {  Icon } from '@wordpress/components';
import  {  IconButton } from '@wordpress/components';
import  {  __experimentalInputControl as InputControl } from '@wordpress/components';
import  {  KeyboardShortcuts } from '@wordpress/components';
import  {  MenuGroup } from '@wordpress/components';
import  {  MenuItem } from '@wordpress/components';
import  {  MenuItemsChoice } from '@wordpress/components';
import  {  Modal } from '@wordpress/components';
import  {  ScrollLock } from '@wordpress/components';
import  { NavigableMenu, TabbableContainer } from '@wordpress/components';
import  {  __experimentalNavigation as Navigation } from '@wordpress/components';
import  {  __experimentalNavigationGroup as NavigationGroup } from '@wordpress/components';
import  {  __experimentalNavigationItem as NavigationItem } from '@wordpress/components';
import  {  __experimentalNavigationMenu as NavigationMenu } from '@wordpress/components';
import  {  Notice } from '@wordpress/components';
import  {  __experimentalNumberControl as NumberControl } from '@wordpress/components';
import  {  NoticeList } from '@wordpress/components';
import  {  Panel } from '@wordpress/components';
import  {  PanelBody } from '@wordpress/components';
import  {  PanelHeader } from '@wordpress/components';
import  {  PanelRow } from '@wordpress/components';
import  {  Placeholder } from '@wordpress/components';
import  {  Popover } from '@wordpress/components';
import  {  QueryControls } from '@wordpress/components';
import  {  __experimentalRadio as Radio } from '@wordpress/components';
import  {  __experimentalRadioGroup as RadioGroup } from '@wordpress/components';
import  {  RadioControl } from '@wordpress/components';
import  {  RangeControl } from '@wordpress/components';
import  {  ResizableBox } from '@wordpress/components';
import  {  ResponsiveWrapper } from '@wordpress/components';
import  {  SandBox } from '@wordpress/components';
import  {  SelectControl } from '@wordpress/components';
import  {  Snackbar } from '@wordpress/components';
import  {  SnackbarList } from '@wordpress/components';
import  {  Spinner } from '@wordpress/components';
import  {  TabPanel } from '@wordpress/components';
import  {  __experimentalText as Text } from '@wordpress/components';
import  {  TextControl } from '@wordpress/components';
import  {  TextareaControl } from '@wordpress/components';
import  {  TextHighlight } from '@wordpress/components';
import  {  Tip } from '@wordpress/components';
import  {  ToggleControl } from '@wordpress/components';
import  {  Toolbar } from '@wordpress/components';
import  {  ToolbarButton } from '@wordpress/components';
// import  {  __experimentalToolbarContext as ToolbarContext } from '@wordpress/components';
import  {  ToolbarGroup } from '@wordpress/components';
import  {  ToolbarItem } from '@wordpress/components';
import  {  Tooltip } from '@wordpress/components';
import  {
	 __experimentalTreeGrid as TreeGrid,
	__experimentalTreeGridRow as TreeGridRow,
	__experimentalTreeGridCell as TreeGridCell,
	__experimentalTreeGridItem as TreeGridItem,
} from '@wordpress/components';
import  {  TreeSelect } from '@wordpress/components';
import  {  __experimentalUnitControl as UnitControl } from '@wordpress/components';
import  {  VisuallyHidden } from '@wordpress/components';

// import  {  IsolatedEventContainer } from '@wordpress/components';
import  {
	createSlotFill,
	Slot,
	Fill,
	SlotFillProvider,
	__experimentalUseSlot,
} from '@wordpress/components';

import { __unstableDisclosureContent } from '@wordpress/components';

import {
	__unstableComposite,
	__unstableCompositeGroup,
	__unstableCompositeItem,
	__unstableUseCompositeState,
} from '@wordpress/components';

import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

const BLOCKNAME = "components";
const BLOCKPATH = "gutenblocks/components";

registerBlockType( BLOCKPATH, {

	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */

	apiVersion: 2,
	title: __( 'Components', 'gutenblocks' ),
	description: __('A big block with all the components created by WordPress'),
	category: 'gutenblocks',
	icon: 'smiley',
	supports: {
		html: false,
	},
	attributes: {
		text: {
			type: "string",
		},
		number: {
			type: "number",
		},
		height: {
			type: "number",
		},
		width: {
			type: "number",
		},
		alignment: {
			type: "string"
		}
	},

	edit: (props) => {
		const onTextChange = (newValue) => props.setAttributes( { text: newValue } )
		const onNumberChange = (newValue) =>  props.setAttributes( { number: newValue } )
		const onAlignmentChange = (newValue) =>  props.setAttributes( { alignment: newValue } )

		const [visible, setVisible] = useState(false);
		const [scrollLock, setScrollLock] = useState(false);
		const [user, setUser] = useState("");

		const allBlocks = (
			<div { ...useBlockProps() }>

				<PanelBody>

					<Button isPrimary>Button!</Button>

				</PanelBody>
				<PanelBody>

					{/* Buttons standing closely together. Almost look like one button with seperated stuff */}
					<ButtonGroup>
						<Button isSecondary>33.3%</Button>
						<Button isPrimary>66.6%</Button>
						<Button isSecondary>100%</Button>
					</ButtonGroup>

				</PanelBody>
				<PanelBody>

					{/* When in need of a angle */}
					<AnglePickerControl value={ props.attributes.number } onChange={ onNumberChange } />

				</PanelBody>
				<PanelBody>

					{/* Alignment for bg images for example */}
					<AlignmentMatrixControl value={props.attributes.alignment} onChange={ onAlignmentChange } />
					<p>{props.attributes.alignment}</p>

				</PanelBody>
				<PanelBody>

					{/* Just a wrapper for user inputs really */}
					<BaseControl
						help="Anything you want opens on click"
					>
						<BaseControl.VisualLabel>
							Author
						</BaseControl.VisualLabel>
						<Button isSecondary style={{ marginLeft: "8px"}}>
							Select an author
						</Button>
					</BaseControl>

				</PanelBody>

				{/* Can be used for stuff like passing/margin. Seems to have some troubles with the Visualizer that is offered with this component */}
				<PanelBody>
					<BoxControl
						values={ {
							top: '50px',
							left: '10%',
							right: '10%',
							bottom: '50px',
						 } }
						onChange={ ( nextValues ) => console.log(nextValues) }
					/>
				</PanelBody>


				<PanelBody>

					{
						/**
						 *
						 * Just a different look
						 *
						 * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/card
						 */
					}
					<Card>
						<CardHeader>Card Header</CardHeader>
						<CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit vel turpis in vehicula. </CardBody>
						<CardDivider />
						<CardBody size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit vel turpis in vehicula. Nam luctus condimentum mollis. </CardBody>
						<CardMedia>
							<img src="https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-m.jpg" />
						</CardMedia>
						<CardFooter>Card Footer</CardFooter>
					</Card>

				</PanelBody>
				<PanelBody>

					{/* A single checkbox */}
					<CheckboxControl
						heading="User"
						label="Is author"
						help="Is the user a author or not?"
						checked={ true }
					/>

				</PanelBody>
				<PanelBody>

					{/* A button that text can be copied from */}
					<ClipboardButton
						isPrimary
						text="Text to be copied."
						onCopy={ () => true }
						onFinishCopy={ () => false }
					>
						Copy
					</ClipboardButton>

				</PanelBody>

				{/* Got some problems with making the immutableColorSlugs prop work. */}
				<PanelBody>
					<ColorEdit
						colors={ [
							{ name: 'red', color: '#f00', slug: "1" },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						] }
					/>
				</PanelBody>

				<PanelBody>

					{/* Just shows a color */}
					<ColorIndicator
						colorValue={ "#ff73ff" }
					/>

				</PanelBody>
				<PanelBody>

					{/* User can select from different colors */}
					<ColorPalette
						colors={ [
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						] }
						value={ '#f00' }
						style={{width: "200px" }}
					/>

				</PanelBody>
				<PanelBody>

					{/* User can select any color */}
					<ColorPicker
						color={ '#f00' }
					/>

				</PanelBody>
				<PanelBody>

					{/* A input and/or select with search */}
					<ComboboxControl
						label="Font Size"
						value="small"
						options={[
							{
								value: "small",
								label: "Small"
							},
							{
								value: "normal",
								label: "Normal"
							},
							{
								value: "large",
								label: "Large"
							},
							{
								value: "huge",
								label: "Huge"
							}
						]}
						onInputChange={(inputValue) =>
							setFilteredOptions(
								[
									{
										value: "small",
										label: "Small"
									},
									{
										value: "normal",
										label: "Normal"
									},
									{
										value: "large",
										label: "Large"
									},
									{
										value: "huge",
										label: "Huge"
									}
								].filter(option =>
									option.label.toLowerCase().startsWith(inputValue.toLowerCase())
								)
							)
						}
					/>

				</PanelBody>
				<PanelBody>

					<GradientPicker
						value={ '#f00' }
						onChange={ () => true }
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
							{
								name: 'Luminous vivid orange to vivid red',
								gradient:
									'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
								slug: 'luminous-vivid-orange-to-vivid-red',
							},
							{
								name: 'Very light gray to cyan bluish gray',
								gradient:
									'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
								slug: 'very-light-gray-to-cyan-bluish-gray',
							},
							{
								name: 'Cool to warm spectrum',
								gradient:
									'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
								slug: 'cool-to-warm-spectrum',
							},
						]}
					/>

				</PanelBody>
				<PanelBody>

					<CustomGradientPicker
						value={ '#f00' }
						onChange={ () => true }
					/>

				</PanelBody>
				<PanelBody>

					{/* A select but with a possibility to style the option elements for a good visual effect */}
					<CustomSelectControl
						label="Font Size"
						options={ [
							{
								key: 'small',
								name: 'Small',
								style: { fontSize: '50%' },
							},
							{
								key: 'normal',
								name: 'Normal',
								style: { fontSize: '100%' },
							},
							{
								key: 'large',
								name: 'Large',
								style: { fontSize: '200%' },
							},
						] }
						onChange={ ( e ) => console.log(e) }
						value={ [
							{
								key: 'small',
								name: 'Small',
								style: { fontSize: '75%' },
							},
							{
								key: 'normal',
								name: 'Normal',
								style: { fontSize: '100%' },
							},
							{
								key: 'large',
								name: 'Large',
								style: { fontSize: '125%' },
							},
						].find( ( option ) => option.key === 'large' ) }
					/>

				</PanelBody>
				<PanelBody>

					<Dashicon icon="admin-home" style={{ fontSize: "54px", width: "54px", height: "54px" }}/>

				</PanelBody>
				<PanelBody>

					{/* <p>Both:</p> */}

					<DateTimePicker
						currentDate={ new Date() }
						onChange={ ( date ) => console.log(date) }
						// is12Hour
					/>

				</PanelBody>
				<PanelBody>

					{/* <p>Date:</p> */}

					<DatePicker
						currentDate={ new Date() }
						onChange={ ( date ) => console.log(date) }
						// is12Hour
					/>

				</PanelBody>
				<PanelBody>

					{/* <p>Time:</p> */}

					<TimePicker
						currentDate={ new Date() }
						onChange={ ( date ) => console.log(date) }
						// is12Hour
					/>

				</PanelBody>
				<PanelBody>

					{/* Not quite sure how it's different from a select, but it seems to be connected with spacing */}
					<DimensionControl
						label={ __( 'Padding' ) }
						icon={ 'desktop' }
						onChange={ (e) => console.log(e) }
						value={ 18 }
					/>

				</PanelBody>
				<PanelBody>

				<PanelBody>
						<Disabled>
							Content in here is disabled because it's in the disabled component
							<DimensionControl
								label={ __( 'Padding' ) }
								icon={ 'desktop' }
								onChange={ (e) => console.log(e) }
								value={ 18 }
							/>
						</Disabled>
				</PanelBody>

				</PanelBody>

				<PanelBody>
						<DraggalbeExample />
				</PanelBody>

				{/* </InspectorControls> */}
				<PanelBody>

					<Autocomplete
						onChange={ onTextChange }
						value={ props.attributes.text }
						name="fruit"
						options={[
							{ value: '🍎', label: 'Apple', id: 1 },
							{ value: '🍊', label: 'Orange', id: 2 },
							{ value: '🍇', label: 'Grapes', id: 3 },
						]}
					/>

				</PanelBody>
				<PanelBody>

					<RichText onChange={ onTextChange } value={ props.attributes.text } />

				</PanelBody>
				<PanelBody>
					<Animate type="slide-in">
						{ ( { className } ) => (
							<Notice className={ className } status="success">
								<p>Slide-in animation.</p>
							</Notice>
						) }
					</Animate>

				</PanelBody>
				<PanelBody>
					<DropZoneProvider>
						<div style={{ backgroundColor: "#e7e7e7", padding: "56px 64px" }}>
							{ false ? 'Dropped!' : 'Drop something here' }
							<DropZone
								onFilesDrop={ (e) => console.log(e) }
								onHTMLDrop={ (e) => console.log(e)  }
								onDrop={ (e) => console.log(e) }
							/>
						</div>
					</DropZoneProvider>

				</PanelBody>

				{/* MenuGroup and -Item can be used to design the DropdownMenu */}
				<PanelBody>
					<DropdownMenu icon={ more } label="Select a direction">
						{ ( { onClose } ) => (
							<Fragment>
								<MenuGroup>
									<MenuItem icon={ arrowUp } onClick={ onClose }>
										Move Up
									</MenuItem>
									<MenuItem icon={ arrowDown } onClick={ onClose }>
										Move Down
									</MenuItem>

									{/* When a user can select between choices (radio btns basicly) */}
									<MenuItemsChoice choices={[
											{
												value: 'visual',
												label: 'Visual editor',
												shortcut: 's' //don't work out of the box as a shortcut - needs a shortcut component
											},
											{
												value: 'text',
												label: 'Code editor',
											},
										]}
										icon={ arrowDown }
										onSelect={ (e) =>console.log(e) }
										value="text">
									</MenuItemsChoice>
								</MenuGroup>
								<MenuGroup>
									<MenuItem icon={ trash } onClick={ onClose }>
										Remove
									</MenuItem>
								</MenuGroup>
							</Fragment>
						) }
					</DropdownMenu>

				</PanelBody>

				{/* A dropdown menu */}
				<PanelBody>
					<DropdownMenu
						icon={ more }
						label="Select a direction"
						controls={ [
							{
								title: 'Up',
								icon: arrowUp,
								onClick: () => console.log( 'up' ),
							},
							{
								title: 'Right',
								icon: arrowRight,
								onClick: () => console.log( 'right' ),
							},
							{
								title: 'Down',
								icon: arrowDown,
								onClick: () => console.log( 'down' ),
							},
							{
								title: 'Left',
								icon: arrowLeft,
								onClick: () => console.log( 'left' ),
							},
						] }
					/>

				</PanelBody>

				<PanelBody>
					<Dropdown
						className="my-container-class-name"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={ ( { isOpen, onToggle, onClose } ) => (
							<Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
								Toggle a dropdown!
							</Button>
						) }
						renderContent={ ({ isOpen, onToggle, onClose }) => (
							<MenuGroup>
								<MenuItem icon={ arrowUp } onClick={ onClose }>
									Move Up
								</MenuItem>
								<MenuItem icon={ arrowDown } onClick={ onClose }>
									Move Down
								</MenuItem>
							</MenuGroup>
						) }
					/>

				</PanelBody>

				{/* Basicly an achor just with some different formatting */}
				<PanelBody>
					<ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
				</PanelBody>

				{/* FlexItem is basicly just a div with some styling which is not that important */}
				{/* FlexBlock has some more styles but act similar. FlexBox has style "flex: 1 1 0%" so it grows and becomes the biggest box unless there is another FlexBlock */}
				<PanelBody>
					<Flex
						gap={2}
						align="center"
						justify="space-between"
					>
						<FlexItem style={{ backgroundColor:"#ff000050", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
							<h5>FlexItem</h5>
						</FlexItem>
						<FlexBlock style={{ backgroundColor:"#00ff0050", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
							<h5>FlexBlock</h5>
						</FlexBlock>
					</Flex>
				</PanelBody>

				{/* Handy when a specific background-position should be used on an image */}
				<PanelBody>
					<FocalPointPicker
						url={ "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" }
						dimensions={{
							width: 400,
							height: 100,
						}}
						value={{
							x: 0.5,
							y: 0.5,
						}}
						onChange={ ( focalPoint ) => console.log(focalPoint) }
					/>
				</PanelBody>

				{/* Basicly an iframe but easier to handle than a regular iframe */}
				<PanelBody>
					<FocusableIframe
						src="https://www.youtube.com/embed/xK0kKbNXZc4"
						onFocus={ () => console.log( 'iframe is focused' ) }
					/>
				</PanelBody>

				<PanelBody>
					<FontSizePicker
						fontSizes={[
							{
								name: __( 'Small' ),
								slug: 'small',
								size: 12,
							},
							{
								name: __( 'Big' ),
								slug: 'big',
								size: 26,
							},
						]}
						value={ 26 }
						fallbackFontSize={ 12 }
						onChange={ ( newFontSize ) => console.log(newFontSize) }
						withSlider
					/>
				</PanelBody>

				{/* Can be used with render og as a plain button if you write the value as HTML (in between as children) */}
				<PanelBody>
					<FormFileUpload
						accept="image/*"
						onChange={ (e) => console.log('new image', e) }
						render={ ( { openFileDialog } ) => (
							<div>
								<p>Upload an image below: </p>
								<Button isSecondary onClick={ openFileDialog }>
									Upload image
								</Button>
							</div>
						)}
					/>
				</PanelBody>

				<PanelBody>
					<FormToggle
						checked={ true }
						onChange={ () => console.log("toggled") }
					/>
					<br/>
					<br/>
					<FormToggle
						checked={ false }
						onChange={ () => console.log("toggled") }
					/>
				</PanelBody>

				{/* Adding tags to an array */}
				<PanelBody>
					<MyFormTokenField />
				</PanelBody>

				{/* Used for guide/tutorial for how to use a block for example */}
				{false ? <Guide
					onFinish={ () => console.log("finished") }
					pages={ [
						{
							image: <img src="https://acmestore.com/add-to-cart.png" />,
							content: <p>Welcome to the ACME Store!</p>,
						},
						{
							content: <p>Click <i>Add to Cart</i> to buy a product.</p>,
						},
					] }
					finishButtonText="I'm done!"
					contentLabel="Random Guide/tutorial"
				/> : null }

				<PanelBody>
					<Fragment>
						<p>An icon:</p>
						<Icon
							icon={
								<svg>
									<path d="M5 4v3h5.5v12h3V7H19V4z" />
								</svg>
							}
							/>
						<p>Another icon:</p>
						<Icon
							icon="smiley"
							size={56}
						/>
					</Fragment>
				</PanelBody>

				<PanelBody>
					<Fragment>
						<IconButton isPrimary
							icon={
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.537 2.592l-5.445 3.779c-1.504 1.043-1.877 3.108-.833 4.611l5.668 8.168c1.287 1.855 3.352 2.85 5.451 2.85 3.605 0 6.622-2.919 6.622-6.634 0-1.304-.384-2.621-1.182-3.773l-5.668-8.168c-.644-.927-1.676-1.425-2.726-1.425-.652 0-1.311.192-1.887.592zm.945 1.361c.751-.521 1.784-.334 2.307.416l1.415 2.042-3.912 2.693-2.36-3.403 2.55-1.748zm6.725 15.503c-2.252 1.563-5.356 1.002-6.919-1.25l-3.306-4.764 8.167-5.668 3.308 4.764c1.562 2.252 1.001 5.355-1.25 6.918zm-16.031-11.567l-2.499-1.74.62-.891 2.271 1.582c-.169.332-.3.681-.392 1.049zm.702 4.006l-2.299 1.615-.624-.888 2.414-1.699c.135.338.299.665.509.972zm-.778-1.906h-3.1v-1.085h3.029c-.013.366.005.729.071 1.085z"/></svg>
							}
						>
							IconButton
						</IconButton>
					</Fragment>
				</PanelBody>

				<PanelBody>
					{/* <p>Right now it won't change until you press enter, but this can be changed</p> */}
					<InputControl
						label="InputControl"
						labelPosition="top"
						// prefix={ //you can add some stuff inside the field before the text
						// 	<span>Your email:</span>
						// }
						value=""
						type="email"
						isPressEnterToChange
						onChange={ ( nextValue ) => console.log(nextValue) }
					/>
				</PanelBody>

				{/* Can also be added to the global document if the component doesn't have children. Works best with form elements. Not sure how the bind global prop works. */}
				<PanelBody>
					<KeyboardShortcuts
						shortcuts={ {
							'shift+y': (e) => console.log(e),
						} }
					>
						<RichText value={ props.attributes.text} onChange={newValue => console.log(newValue)} />
					</KeyboardShortcuts>
				</PanelBody>

				<PanelBody>
					<MenuGroup label="MenuGroup">
						<MenuItem>MenuItem 1</MenuItem>
						<MenuItem>MenuItem 2</MenuItem>
						<MenuGroup label="MenuItemsChoices">
							<MenuItemsChoice
								choices={[
									{
										value: 'visual',
										label: 'MenuItemsChoice 1',
									},
									{
										value: 'text',
										label: 'MenuItemsChoice 2',
									},
									{
										value: '3',
										label: 'MenuItemsChoice 3',
									},
								]}
								icon={ arrowDown }
								onSelect={ (e) =>console.log(e) }
								value="text">
							</MenuItemsChoice>
						</MenuGroup>
					</MenuGroup>
				</PanelBody>

				{false ?
					<Modal
						focusOnMount //focus on the first element in the modal
						shouldCloseOnEsc
						shouldCloseOnClickOutside
						overlayClassName="my-extra-modal-overlay-class"
						title="This is my modal"
						onRequestClose={ e => console.log("Closing modal") }
					>
						<p>Thanks for using this modal</p>
						<Button isSecondary onClick={ e => console.log("Closing modal") }>
							My custom close button
						</Button>
					</Modal>
				: null}

				<PanelBody>
					<div>
						{/* Can use arrows to navigate between items */}
						<span>Navigable Menu:</span>
						<NavigableMenu onNavigate={ e => console.log(e) } orientation="horizontal" cycle>
							<Button isSecondary>Item 1</Button>
							<Button isSecondary>Item 2</Button>
							<Button isSecondary>Item 3</Button>
						</NavigableMenu>
					</div>
				</PanelBody>

				<PanelBody>
					<div>
						<span>Tabbable Container:</span>
						{/* Seems to have a bug on my CPU when I click tab (skips an item) */}
						<TabbableContainer onNavigate={ e => console.log(e) }>
							<Button isSecondary tabIndex="0">Section 1</Button>
							<Button isSecondary tabIndex="0">Section 2</Button>
							<Button isSecondary tabIndex="0">Section 3</Button>
							<Button isSecondary tabIndex="0">Section 4</Button>
						</TabbableContainer>
					</div>
				</PanelBody>

				{/* Handy navigationial container that could be used for long advanced content.
				Couldn't manage to get the search show up */}
				<PanelBody>
					<Navigation>
						<NavigationMenu
							title="Home"
						>
							<NavigationGroup title="Group 1">
								<NavigationItem
									item="item-3"
									navigateToMenu="category"
									title="Category"
								/>
							</NavigationGroup>
							<NavigationGroup title="Group 2">
								<NavigationItem item="item-1" title="Item 1" />
								<NavigationItem item="item-2" title="Item 2" />
							</NavigationGroup>
						</NavigationMenu>

						<NavigationMenu
							backButtonLabel="Home"
							menu="category"
							parentMenu="root"
							title="Category"
						>
							<NavigationItem badge="1" item="child-1" title="Child 1" />
							<NavigationItem item="child-2" title="Child 2" />
						</NavigationMenu>
					</Navigation>
				</PanelBody>

				<PanelBody>
					<Notice status="error">
						An unknown error occurred.
					</Notice>
				</PanelBody>

				<PanelBody>
					<p>NoticeList:</p>
					<NoticeList
						notices={[
							{
								status: "warning",
								content: [<h4>Warning!</h4>, <p>Be aware!</p>],
							},
							{
								status: "error",
								content: "It's an error",
							},
						]}
					/>
				</PanelBody>

				<PanelBody>
					<NumberControl
						onChange={ e => console.log(e) }
						isDragEnabled
						isShiftStepEnabled
						shiftStep={ 10 }
						step={10}
						value={ 10 }
					/>
				</PanelBody>

				<PanelBody>
					<Panel header="My Panel">
						<PanelHeader>Panel Header</PanelHeader>
						{/* Not sure how to get buttonProps working */}
						<PanelBody
							title="My Block Settings"
							icon={ more }
							initialOpen={ true }
							onToggle={ (e) => console.log("toggled", e) }
						>
							<PanelRow>My Panel Inputs and Labels</PanelRow>
						</PanelBody>
					</Panel>
				</PanelBody>

				{/* "Normally used by blocks to render their empty state." - So I guess this should be used in cases where the user needs to select (for example) an image to have an image show, and when there is no image, the Placeholder component is used instead */}
				<PanelBody>
					<Placeholder
						icon={arrowDown}
						label="Image"
						instructions="Select an image to remove this placeholder"
						isColumnLayout //element is flex if this is not used
					>
						<div style={{ backgroundColor: "#e7e7e7", padding: "56px 64px", display: "flex", justifyContent: "center" }}>
							<Button isSecondary>Select image</Button>
						</div>
					</Placeholder>
				</PanelBody>

				<PanelBody>
					<Button	isSecondary onClick={ (e) => setVisible(!visible) }>
						Toggle Popover!
						{ visible && (
							<Popover>
								<div style={{padding: "16px"}}>
									Popover is toggled!
								</div>
							</Popover>
						) }
					</Button>
				</PanelBody>

				{/* When querying stuff this can be used for sorting and controlling */}
				<PanelBody>
					<MyQueryControls />
				</PanelBody>

				{/* Basicly button group just with radio buttons */}
				<PanelBody>
					<RadioGroup
						id="default-radiogroup"
						onChange={ e => console.log(e) }
						defaultChecked="option1"
						label="options" //aria-label - not label really
					>
						<Radio value="option1">Option 1</Radio>
						<Radio value="option2">Option 2</Radio>
					</RadioGroup>
				</PanelBody>

				<PanelBody>
					<RadioControl
						label="User type"
						help="The type of the current user"
						selected={ "a" }
						options={ [
							{ label: 'Author', value: 'a' },
							{ label: 'Editor', value: 'e' },
						] }
						onChange={ ( option ) => { e => console.log(e) } }
					/>
				</PanelBody>

				<PanelBody>
					<RangeControl
						label="Columns"
						help="Additional info about this."
						beforeIcon={arrowDown}
						afterIcon={arrowUp}
						allowReset
						resetFallbackValue={3}
						step={1}
						withInputField={false}
						icon={ more }
						separatorType="none"
						trackColor="green"
						isShiftStepEnabled
						marks = {[
							{
								value: 0,
								label: '0',
							},
							{
								value: 2,
								label: '1',
							},
							{
								value: 4,
								label: '4',
							},
							{
								value: 6,
								label: '6',
							},
							{
								value: 8,
								label: '8',
							},
							{
								value: 10,
								label: '10',
							},
						]}
						railColor="red"
						renderTooltipContent={ () => "I'm rendered tooltip content" }
						value={ props.attributes.number }
						onChange={ onNumberChange }
						min={ 0 }
						max={ 10 }
					/>
				</PanelBody>

				<PanelBody>
					<ResizableBox
						size={ {
							height: props.attributes.height,
							width: props.attributes.width,
						} }
						minHeight="50"
						minWidth="50"
						__experimentalShowTooltip={true}
						__experimentalTooltipProps={{
							showPx: true,
							fadeTimeout: 1000,
						}}
						enable={ {
							top: false,
							right: true,
							bottom: true,
							left: false,
							topRight: false,
							bottomRight: true,
							bottomLeft: false,
							topLeft: false,
						} }
						onResizeStop={ ( event, direction, elt, delta ) => {
							props.setAttributes( {
								height: parseInt( props.attributes.height + delta.height, 10 ),
								width: parseInt( props.attributes.width + delta.width, 10 ),
							} );
							console.log("stops resizing")
						} }
						onResizeStart={ () => {
							console.log("starts resizing")
						} }
					>
						<div>Hallo!</div>
					</ResizableBox>
				</PanelBody>

				{/* Not really sure what it does. Adds a wrapper with some props that might make it more responsive. */}
				<PanelBody>
					<ResponsiveWrapper
						naturalWidth={ 2000 }
						naturalHeight={ 680 }
					>
						<img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_69881045.jpg?crop=240,0,2400,1320&wid=4000&hei=2200&scl=0.6" alt="WordPress" />
					</ResponsiveWrapper>
				</PanelBody>

				{/* Can write HTML and output it as an iframe */}
				<PanelBody>
					<SandBox
						html="<p>Content</p>"
						title="Sandbox"
						type="embed"
						scripts={[console.log("It's a sandbox")]}
					/>
				</PanelBody>


				{/* Not sure how it works really. Didn't work for me. */}
				<PanelBody>
					<div
						style={ {
							backgroundColor: '#fff',
							backgroundImage:
								'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.05) 50%)',
							backgroundSize: '50px 50px',
							height: 200,
							position: 'relative',
						} }
						{ ...props }
					>
						<div>Start scrolling down...</div>
						<div
							style={ {
								position: 'sticky',
								top: 0,
								padding: 40,
								display: 'flex',
								justifyContent: 'center',
								textAlign: 'center',
							} }
						>
							<Button isSecondary onClick={ () => setScrollLock(!scrollLock) }>
								Toggle scroll lock
							</Button>
							{ scrollLock && <ScrollLock /> }
							<p>Scroll locked: <strong>{ scrollLock ? 'Yes' : 'No' }</strong></p>
						</div>
					</div>
				</PanelBody>

				{/* Multiple prop don't seem to work properly */}
				<PanelBody>
					<SelectControl
						label={ __( 'Select some users:' ) }
						value={ user } // e.g: value = [ 'a', 'c' ]
						onChange={ ( user ) => { setUser( user ) } }
						options={ [
							{ value: null, label: 'Select a User', disabled: true },
							{ value: 'a', label: 'User A' },
							{ value: 'b', label: 'User B' },
							{ value: 'c', label: 'User c' },
						] }
					/>
				</PanelBody>

				{/* Didn't really get this working */}
				<PanelBody>
					<Panel header="Panel with slot">
						<PanelBody>
							<Slot name="MyPanelSlot"/>
						</PanelBody>
					</Panel>
				</PanelBody>

				<PanelBody>
					<Snackbar>
						Post published successfully.
					</Snackbar>
				</PanelBody>

				{/* Seems to be a bug in content when rendering several snacks */}
				<PanelBody>
					<div
						style={{
							height: "200px"
						}}>
						<SnackbarList
							notices={[
								{
									status: "warning",
									content: [<span>Warning!</span>, <span>Be aware!</span>],
								},
								{
									status: "error",
									content: "It's an error",
								},
							]}
						>
							<p>
								My snacks:
							</p>
						</SnackbarList>
					</div>
				</PanelBody>

				<PanelBody>
					<Spinner />
				</PanelBody>

				<PanelBody>
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						orientation="horizontal"
						initialTabName="tab2"
						onSelect={ (tabName) => console.log( 'Selecting tab', tabName ) }
						tabs={ [
							{
								name: 'tab1',
								title: 'Tab 1',
								className: 'tab-one',
							},
							{
								name: 'tab2',
								title: 'Tab 2',
								className: 'tab-two',
							},
						] }>
						{
							( tab ) => (
								<PanelBody>
									<p>{ tab.title }</p>
									<NumberControl
										onChange={ e => console.log(e) }
										isDragEnabled
										isShiftStepEnabled
										shiftStep={ 10 }
										step={10}
										value={ 10 }
									/>
								</PanelBody>
							)
						}
					</TabPanel>
				</PanelBody>

				<PanelBody>
					<Text variant="title.large" as="h1">
						Title Large
					</Text>
					<Text variant="title.medium" as="h2">
						Title Medium
					</Text>
					<Text variant="title.small" as="h3">
						Title Small
					</Text>
					<Text variant="subtitle">Subtitle</Text>
					<Text variant="subtitle.small">Subtitle Small</Text>
					<Text variant="body">Body</Text>
					<Text variant="body.small">Body Small</Text>
					<Text variant="button">Button</Text>
					<Text variant="caption">Caption</Text>
					<Text variant="label">Label</Text>
				</PanelBody>


				<PanelBody>
<TextControl
	label="Additional CSS Class"
	value={ "myemail@emails.com" }
	onChange={ e => console.log(e) }
	type="email"
/>
				</PanelBody>

				<PanelBody>
<TextHighlight
	text="Why do we like Gutenberg? Not because the documentation is great atleast!"
	highlight="Gutenberg"
/>
				</PanelBody>

				<PanelBody>
<TextareaControl
	label="Textarea"
	rows={2}
	value={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia sem suscipit faucibus sollicitudin. Nam gravida lectus vitae elit vestibulum aliquam vitae ac nunc." }
	onChange={ e => console.log(e) }
/>
				</PanelBody>


				{/* That's not much of a component right there. But I guess it could be handy */}
				<PanelBody>
<Tip>
	<p>Here's a tip for ya. Tip tipsy.</p>
</Tip>
				</PanelBody>

				<PanelBody>
<ToggleControl
	label="Fixed Background"
	help={ true ? 'Has fixed background.' : 'No fixed background.' }
	checked={ true }
	onChange={ (e) => console.log(e) }
/>
				</PanelBody>

				<PanelBody>
					<Toolbar label="Options">
						<ToolbarButton
							icon={ "edit" }
							label="Edit"
							onClick={ () => console.log( 'Editing' ) }
						/>
						<ToolbarButton
							icon={ more }
							label="More"
							isActive
							onClick={ () => console.log( 'More!' ) }
						/>
						<ToolbarButton
							icon={ arrowDown }
							label="More"
							isDisabled
							onClick={ () => console.log( 'More!' ) }
						/>
					</Toolbar>
				</PanelBody>

				<PanelBody>
					<Toolbar label="Options">
					</Toolbar>
				</PanelBody>

				<PanelBody>
<Toolbar label="Options">
	<ToolbarItem>
		{ ( toolbarItemHTMLProps ) => (
			<DropdownMenu
				icon={ more }
				label="Select a direction"
				controls={ [
					{
						title: 'Up',
						icon: arrowUp,
						onClick: () => console.log( 'up' ),
					},
					{
						title: 'Right',
						icon: arrowRight,
						onClick: () => console.log( 'right' ),
					},
					{
						title: 'Down',
						icon: arrowDown,
						onClick: () => console.log( 'down' ),
					},
					{
						title: 'Left',
						icon: arrowLeft,
						onClick: () => console.log( 'left' ),
					},
				] }
			/>
		) }
	</ToolbarItem>
	<ToolbarGroup>
		<ToolbarButton
			icon={ "edit" }
			label="Edit"
			onClick={ () => console.log( 'Editing' ) }
		/>
		<ToolbarButton
			icon={ more }
			label="More"
			onClick={ () => console.log( 'More!' ) }
		/>
	</ToolbarGroup>
		<ToolbarButton
			icon={ arrowDown }
			label="More"
			isDisabled
			onClick={ () => console.log( 'More!' ) }
		/>
</Toolbar>
				</PanelBody>

				{/* Position prop seems to be a bit off */}

				<PanelBody>
<Tooltip
	text="More information"
	position="top left"
>
	<div>
		Hover for more information
	</div>
</Tooltip>
				</PanelBody>

				{/* TreeGrid */}

				<PanelBody>
					<MyTreeGrid />
				</PanelBody>

				{/* Endless branch selection. Guess you've seen Wordpress use this before */}
				<PanelBody>
					<TreeSelect
						label="Parent page"
						noOptionLabel="No parent page"
						onChange={ ( page ) => console.log(page) }
						selectedId={ 1 }
						tree={ [
							{
								name: 'Page 1',
								id: 'p1',
								children: [
									{ name: 'Descend 1 of page 1', id: 'p11' },
									{ name: 'Descend 2 of page 1', id: 'p12' },
								],
							},
							{
								name: 'Page 2',
								id: 'p2',
								children: [
									{
										name: 'Descend 1 of page 2',
										id: 'p21',
										children: [
											{
												name: 'Descend 1 of Descend 1 of page 2',
												id: 'p211',
											},
										],
									},
								],
							},
						] }
					/>
				</PanelBody>

				<PanelBody>
					<UnitControl
						onChange={ onNumberChange }
						onUnitChange={ e => console.log("new unit") }
						label="A number and a unit"
						isUnitSelectTabbable
						// isResetValueOnUnitChange //if you want value to reset on unit change
						// units={ //enable to allow just some specifics
						// 	[
						// 		{ value: 'px', label: 'px', default: 0 },
						// 		{ value: '%', label: '%', default: 10 },
						// 		{ value: 'em', label: 'em', default: 0 },
						// 	]
						// }
						value={ props.attributes.number } />
				</PanelBody>

				<PanelBody>
					<p>Below is some hidden text that is only ment to be read for those who needs text spoken to them</p>
					<VisuallyHidden> Show text for screenreader. </VisuallyHidden>
				</PanelBody>

			</div>
		);
		return (
			<Fragment>
				<InspectorControls>
					{allBlocks}
				</InspectorControls>
				{allBlocks}
			</Fragment>
		)
	},

	save: (props) => {
		return (
			<p { ...useBlockProps.save() }>
				<RichText.Content value={ props.attributes.text } />
			</p>
		);
	},
} );
