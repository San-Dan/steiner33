<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php wp_head(); ?>
</head>

<body class="loading" <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php $testMenu = get_menu('Menu'); ?>

  <header>

    <?php if (has_custom_logo()) : ?>
      <div class="site-logo"><?php the_custom_logo(); ?></div>
    <?php else : ?>
      <a class="navbar-brand" href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
    <?php endif; ?>

    <button class="ham" type="menu">
      🍔
    </button>



    <nav class="navbar">
      <ul class="navbar-nav">
        <?php $currentPageId = $wp_query->queried_object_id;
        foreach ($testMenu as $item) : ?>
          <li class="nav-item">
            <a class="nav-link<? $item->object_id == $currentPageId ? ' active' : '' ?> " href="<?= $item->url; ?>">
              <?= $item->title; ?>
            </a>
            <?php if ($item->children > 0) : ?>
              <ul class="navbar-nav">
                <?php foreach ($item->children as $childItem) : ?>
                  <li class="nav-item">
                    <a class="nav-link<?= $childItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $childItem->url; ?>">
                      <?= $childItem->title; ?>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </nav>

  </header>
  <main>
