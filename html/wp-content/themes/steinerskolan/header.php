<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="UTF-8">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="<?php bloginfo('charset'); ?>">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
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