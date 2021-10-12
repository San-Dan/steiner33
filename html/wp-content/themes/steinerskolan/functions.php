<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('automatic-feed-links');

    add_theme_support('widgets');

    // Add support for editor styles.
    add_theme_support('editor-styles');

    // Enqueue editor styles.
    add_editor_style('editor.css');

    add_theme_support(
        'custom-logo',
        array(
            'height'      => 150,
            'width'       => 300,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );
});

 function get_menu(string $location)
 {
     $menu = [];
     $items = wp_get_nav_menu_items($location) ?: [];

    foreach ($items as $item) {
         $parentId = (int) $item->menu_item_parent;

       if ($parentId === 0) {
            $item->children = [];
            $menu[$item->ID] = $item;

            continue;
        }

        $menu[$parentId]->children[] = $item;
    }

    return $menu;
}

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', true, '1.1', 'all');
    wp_enqueue_script('main', get_template_directory_uri() . '/main.js', '', '', true);
});