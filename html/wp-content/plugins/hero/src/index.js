import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";

import { PanelBody, Button } from "@wordpress/components";
const { Fragment } = wp.element;

import "./style.scss";
import "./editor.scss";

// import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/hero", {
	attributes: {
		coverImageId: {
			type: "number",
			default: 0,
		},

		coverImageUrl: {
			type: "string",
			default: "",
		},

		contentImageId: {
			type: "number",
			default: 0,
		},

		contentImageUrl: {
			type: "string",
			default: "",
		},

		url: {
			type: "string",
			default: "Läs mer om oss",
		},

		text: {
			type: "string",
			default:
				"Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.",
		},
	},

	edit: ({ media, attributes, setAttributes }) => {
		const {
			coverImageUrl,
			contentImageUrl,
			coverImageId,
			contentImageId,
			url,
			text,
		} = attributes;

		// Functions
		const setCoverImage = (media) => {
			setAttributes({ coverImageId: media.id, coverImageUrl: media.url });
		};
		const setContentImage = (media) => {
			setAttributes({ contentImageId: media.id, contentImageUrl: media.url });
		};

		// skillnad med media??
		// const onSelectImage = media => {
		//     setAttributes({
		//         mediaURL: media.url,
		//         mediaID: media.id
		//     });
		// };

		const setURL = (value) => {
			setAttributes({ URL: value });
		};

		const setText = (value) => {
			setAttributes({ text: value });
		};

		return [
			<Fragment>
				<InspectorControls>
					<PanelBody title="Select background cover image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={setCoverImage}
								type="image"
								value={mediaID}
								render={({ open }) => (
									<Button
										className={mediaID ? "image-button" : "button button-large"}
										onClick={open}
									>
										{!mediaID ? __("Upload Image") : <img src={mediaURL} />}
									</Button>
								)}
							/>

							<MediaUpload
								onSelect={setContentImage}
								type="image"
								value={mediaID}
								render={({ open }) => (
									<Button
										className={mediaID ? "image-button" : "button button-large"}
										onClick={open}
									>
										{!mediaID ? __("Upload Image") : <img src={mediaURL} />}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelBody>
				</InspectorControls>
				,
				<div className="text-section">
					<input
						className="text-input"
						onChange={setText}
						defaultValue={attributes.text}
					/>
					<input
						className="url-input"
						onChange={setURL}
						defaultValue={attributes.url}
					/>
				</div>
			</Fragment>,
		];
	},

	save: ({ attributes }) => {
		const { coverImageUrl, contentImageUrl } = attributes;
		return [
			<div className="hero-images">
				<img src={coverImageUrl} className="cover-image" />
				<img src={contentImageUrl} className="content-image" />
			</div>,
		];
	},
});
