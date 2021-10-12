<?php
/**
 * Plugin Name:       Hero
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_hero_block_init() {
	wp_register_script('hero-block.js', get_template_directory_uri() . '../../../plugins/hero/build/index.js', array('wp-blocks', 'wp-editor'));
    wp_register_style('hero-index-css', get_template_directory_uri() . '../../../plugins/hero/build/index.css', array() );

	register_block_type("create-block/hero", array(
		'editor_script' => 'hero-block.js',
		'style' => 'hero-index-css'
	));
}
add_action( 'init', 'create_block_hero_block_init' );