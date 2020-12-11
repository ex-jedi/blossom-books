<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<?php perch_layout("main-header-end"); ?>
  <main class="blog-main-content blog-index-main-content">
  <section class="blog-section blog-index-section" >
    <?php perch_content("Blog Index Page Title"); ?>
    <div class="blog-index-category-list">
      <?php
      $categories = perch_blog_categories(array(
        'template' => 'category_link.html'
      ));
      ?>
    </div>
      <?php perch_blog_recent_posts(999); ?>
    </div>
  </section>
  </main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('blog-index-footer-end-js'); ?>