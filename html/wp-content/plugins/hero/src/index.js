const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
} = wp.blockEditor;

const { PanelBody, Button } = wp.components;
const { Fragment } = wp.element;

import "./style.scss";
import "./editor.scss";

// import Edit from "./edit";
// import save from "./save";

registerBlockType("create-block/hero", {
	title: "Hero",
	description: "Hero block",
	icon: "cover-image",
	category: "layout",

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

		urlLink: {
			type: "string",
			default: "",
		},

		urlName: {
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
			urlLink,
			urlName,
			text,
		} = attributes;

		// Functions
		const setCoverImage = (media) => {
			setAttributes({ coverImageId: media.id }, { coverImageUrl: media.url });
		};
		const setContentImage = (media) => {
			setAttributes(
				{ contentImageId: media.id },
				{ contentImageUrl: media.url }
			);
		};

		// skillnad med media??
		// const onSelectImage = media => {
		//     setAttributes({
		//         mediaURL: media.url,
		//         mediaID: media.id
		//     });
		// };

		const setUrlLink = (value) => {
			setAttributes({ urlLink: value });
		};

		const setUrlName = (value) => {
			setAttributes({ urlName: value });
		};

		const setText = (value) => {
			setAttributes({ text: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Select images">
					<p>
						<strong>Select background cover image</strong>
					</p>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={setCoverImage}
							type="image"
							value={coverImageId}
							render={({ open }) => (
								<Button
									className={
										coverImageId ? "image-button" : "button button-large"
									}
									onClick={open}
								>
									Choose bottom image
								</Button>
							)}
						/>
						<p>
							<strong>Select content image</strong>
						</p>
						<MediaUpload
							onSelect={setContentImage}
							type="image"
							value={contentImageId}
							render={({ open }) => (
								<Button
									className={
										contentImageId ? "image-button" : "button button-large"
									}
									onClick={open}
								>
									Choose top image
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>,
			<div className="text-section">
				<input className="text-input" onChange={setText} defaultValue={text} />
				<input
					className="url-input"
					onChange={setUrlLink}
					defaultValue={urlLink}
				/>
				<input
					className="url-input"
					onChange={setUrlName}
					defaultValue={urlName}
				/>
			</div>,
		];
	},

	save: ({ attributes }) => {
		const { coverImageUrl, contentImageUrl } = attributes;
		return (
			<div className="hero-images">
				<img src={coverImageUrl} className="cover-image" />
				<img src={contentImageUrl} className="content-image" />
			</div>
		);
	},
});
