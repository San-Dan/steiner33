<?php 

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('menus');
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('header', get_template_directory_uri() . '/style.css');
});

function get_menu(string $location): Collection
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

 