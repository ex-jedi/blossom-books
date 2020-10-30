<?php include('../perch/runtime.php'); ?>
<?php perch_layout('blog-post-header'); ?>
	<main class="blog-main-content blog-post-main-content main-content">
		<article class="blog-post-article" itemscope itemtype="https://schema.org/BlogPosting" itemprop="blogPost">
			<section class="blog-section blog-post-section">
				<?php perch_blog_post_categories(perch_get('s')); ?>
				<?php perch_blog_post(perch_get('s')); ?>
			</section>
		</article>
	</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('blog-post-end-js'); ?>

