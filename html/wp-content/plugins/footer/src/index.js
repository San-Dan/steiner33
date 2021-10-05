/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	RichText,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

// import "./editor.scss";

registerBlockType("create-block/footer", {
	title: "Footer",
	icon: "star",
	category: "common",

	attributes: {
		text: {
			type: "string",
		},
		backgroundColor: {
			type: "string",
		},
		URL: {
			type: "url"
		}
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { text, backgroundColor, URL } = attributes;

		// Functions
		const setText = (value) => {
			setAttributes({ text: value });
		};
		const setBackgroundColor = (value) => {
			setAttributes({ backgroundColor: value });
		};
		const setURL = (value) => {
			setAttributes({ URL: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette
						value={backgroundColor}
						onChange={setBackgroundColor}
					></ColorPalette>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()} style={{ backgroundColor: backgroundColor }}>
				<PlainText
					value={text}
					placeholder="Text"
					onChange={setText}
					style={{
						fontSize: "24px",
						backgroundColor: "unset",
						width: "auto",
					}}
				/>
				<RichText
				value={URL}
				title="text"
				placeholder="URL"
				onChange={setURL}
				/>

			</div>,
		];
	},
	save: ({ attributes }) => {
		// Attributes
		const { text, backgroundColor, URL } = attributes;

		return (
			<>

				<a href={URL}>{title}</a>

                <p style={{ backgroundColor: backgroundColor }}>{text}</p>
				{/* <button className="scroll-button">↓</button> */}
			</>
		);
	},
});
