import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, Placeholder } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<Placeholder
                label={ __( 'Hero Block', 'hero' ) }
                instructions={ __( 'Add your message', 'hero' ) }
            >
			<TextControl
				label={__("Message", "hero")}
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val })}
			/>
			</Placeholder>
		</div>
	);
}
