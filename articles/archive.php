<?php include('../perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<?php perch_layout("main-header-end"); ?>
<main class="blog-main-content archive-main-content">
	<section class="blog-section blog-index-section blog-archive-section">
			<?php
		        // defaults for all modes
		        $posts_per_page = 10;
		        $template 		= 'post_in_list.html';
		        $sort_order		= 'DESC';
		        $sort_by		= 'postDateTime';
		        $posts_displayed = false;

		        /* --------------------------- POSTS BY CATEGORY --------------------------- */
		        if (perch_get('cat')) {
		            echo '<h1 class="blog-heading blog-page-heading archive-page-heading">'.perch_blog_category(perch_get('cat'), true).'</h1>';

						echo '<div class="blog-index-category-list">';
								$categories = perch_blog_categories(array(
									'template' => 'category_link.html'
								));
						echo '</div>';
						perch_blog_custom(array(
									'category'   => perch_get('cat'),
									'template' => $template,
									'sort'       => $sort_by,
									'sort-order' => $sort_order,
									'count' => 99,
									'paginate' => false,
								));
		            $posts_displayed = true;
						}



		      	/* --------------------------- DEFAULT: ALL POSTS --------------------------- */

		      	if ($posts_displayed == false) {

		      		// No other options have been used; no posts have been displayed yet.
		      		// So display all posts.

							echo '<h1 class="blog-index-page-title section-heading">Archive</h1>';

							echo '<div class="blog-index-category-list">';
							$categories = perch_blog_categories(array(
								'template' => 'category_link.html'
							));

							echo '</div>';

								echo '<div class="index-featured-posts">';
									perch_blog_custom(array(
										'count'      => 2,
										'template'   => $template,
										'sort'       => $sort_by,
										'sort-order' => $sort_order,
									));
							echo '</div>';
							echo '<div class="index-non-featured-posts">';
							perch_blog_custom(array(
										'template' => $template,
										'sort'       => $sort_by,
										'sort-order' => $sort_order,
										'start' => 3,
										'count' => 20,
										'paginate' => false,
									));

							echo '</div>';
								}

		    ?>
	</section>
			<section class="contact-form section">
				<?php perch_content("General Contact Form"); ?>
			</section>
		</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout("blog-footer-end-js"); ?>