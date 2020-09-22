<?php include('../perch/runtime.php'); ?>
<?php perch_layout('simple-header'); ?>
  <main class="blog-main-content blog-index-main-content">
    <h1>Articles</h1>
  <section class="blog-section blog-index-section" >
    <?php perch_content("Blog Index Page Title"); ?>
    <div class="blog-index-category-list">
      <?php
      $categories = perch_blog_categories(array(
        'template' => 'category_link.html'
      ));
      ?>
    </div>
    <div class="index-featured-posts" :class="{'index-featured-posts-push-down': categoryReveal}">
      <?php
        perch_blog_custom(array(
          'count'      => 2,
          'template'   => 'featured_posts.html',
          'sort'       => 'postDateTime',
          'sort-order' => 'DESC',
        ));
      ?>
    </div>
    <div class="index-non-featured-posts">
      <?php
        perch_blog_custom(array(
          'template'   => 'non_featured_posts.html',
          'sort'       => 'postDateTime',
          'sort-order' => 'DESC',
          'start' => 3,
          'count' => 18,
          'paginate' => false,
        ));
      ?>
    </div>
  </section>
  <section class="contact-form section">
    <?php perch_content("General Contact Form"); ?>
  </section>
  </main>
<?php perch_layout('main-footer'); ?>