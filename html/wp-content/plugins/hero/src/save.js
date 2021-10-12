import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return <div {...useBlockProps.save()}>{attributes.message}</div>;
}
