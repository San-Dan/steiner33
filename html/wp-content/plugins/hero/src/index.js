import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";

import { PanelBody, Button } from "@wordpress/components";

import "./style.scss";
import "./editor.scss";

// import Edit from "./edit";
// import save from "./save";

registerBlockType("create-block/hero", {

	attributes: {
		coverImageId: {
			type: 'string',
			default: 0
		},

		coverImageUrl: {
			type: 'string',
			default: ''
		},

		contentImageId: {
			type: 'string',
			default: 0
		},

		contentImageUrl: {
			type: 'string',
			default: ''
		},

		url: {
			type: 'string',
			default: 'Läs mer om oss'
		}, 
		
		text: {
		type: 'string',
		default: 'Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.'
}, 

	edit: ({ attributes, setAttributes }) => {
		const {
			coverImageUrl,
			contentImageUrl,
			coverImageId,
			contentImageId,
			url, 
			text
		} = attributes;


	// Functions
	const setCoverImage = (value) => {
		setAttributes({ coverImageId: value.id, coverImageUrl: value.url });
	};
	const setCircleImage = (value) => {
		setAttributes({ contentImageId: value.id, contentImageUrl:value.url });
	};
	const setURL = (value) => {
		setAttributes({ URL: value });
	};

	const setText = (value) => {
		setAttributes({ text: value });
	};

	return [
		<InspectorControls>
			<PanelBody title="Select background cover image">
				<MediaUploadCheck>
					<MediaUpload>
						
					</MediaUpload>
				</MediaUploadCheck>
			</PanelBody>
		</InspectorControls>
	]

	},

	save,
});
