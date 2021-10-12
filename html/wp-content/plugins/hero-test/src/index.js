import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType("create-block/hero-test", {
	title: "Hero Test",
	icon: "smiley",
	category: "widgets",

	attributes: {
		firstImageUrl: {
			attribute: "src",
		},
		firstImageId: {
			type: "number",
			default: 0,
		},
		secondImageUrl: {
			attribute: "src",
		},
		secondImageId: {
			type: "number",
			default: 0,
		},
		
	},

	edit: ({ attributes, setAttributes }) => {
		const {
			firstImageUrl,
			secondImageUrl,
			
			firstImageId,
			secondImageId,
			
		} = attributes;

		const firstSelect = (media) => {
			setAttributes({ firstImageUrl: media.url, firstImageId: media.id });
		};
		const secondSelect = (media) => {
			setAttributes({ secondImageUrl: media.url, secondImageId: media.id });
		};

		const uploadButton = (open, imgUrl) => {
			if (imgUrl) {
				return (
					<div>
						<img src={imgUrl}></img>
						<button onClick={open}>Image Chosen</button>
					</div>
				);
			} else {
				return <button onClick={open}>Choose Image</button>;
			}
		};

		return [
			<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={firstSelect}
						value={firstImageId}
						render={({ open }) => uploadButton(open, firstImageUrl)}
					/>
					<MediaUpload
						onSelect={secondSelect}
						value={secondImageId}
						render={({ open }) => uploadButton(open, secondImageUrl)}
					/>
				</MediaUploadCheck>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { firstImageUrl, secondImageUrl } = attributes;
		return [
			<div className="hero-images">
				<img src={firstImageUrl} className="cover-image" />
				<img src={secondImageUrl} className="content-image" />
			</div>,
		];
	},
});