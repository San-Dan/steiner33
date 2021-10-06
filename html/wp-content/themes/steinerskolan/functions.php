<?php

declare(strict_types=1);

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('header', get_template_directory_uri() . '/style.css');
});

// add_action('wp_enqueue_scripts', function () {
//     wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js', '', '', true);
//     wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
//     wp_enqueue_style('style', get_theme_file_uri('assets/app.css'));
//     wp_enqueue_script('script', get_theme_file_uri('assets/app.js'));
// });


add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('menus');

    add_theme_support('widgets');

    // Add support for editor styles.
    add_theme_support('editor-styles');

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
    wp_enqueue_style('header', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('hamburger', get_template_directory_uri() . '/hamburger.js');
});
