<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/css/universal.css">
		<link rel="stylesheet" href="/css/blog.css">

		<!-- Typekit -->
		<script src="https://use.typekit.net/kbq2qtf.js"></script>
		<script>try{Typekit.load({ async: true });}catch(e){}</script>

		<!-- Perch Meta -->
	 	<?php perch_blog_post_meta(perch_get('s'));

		perch_page_attributes(array(
			'template' => 'favicons.html'
		));

		?>
		<!-- Google Analytics -->
		<?php perch_content('Analytics'); ?>

	<!-- Cookie Warning -->
	<!-- TODO: Move to footer -->
	<?php perch_content("Cookie Warning"); ?>


	</head>
	<body>
		<?php perch_content('Google Noscript Tag'); ?>
	  <div class="site-wrapper blog-post-wrapper">
	    <header class="main-header blog-header">
				<div class="header-inner">
					<?php perch_content('Header Title'); ?>
					<nav class="main-nav">
						<?php perch_pages_navigation(array(
									'hide-extensions' => true,
							)); ?>
					</nav>
				</div>
				<?php perch_content('Blog Header Image'); ?>
	    </header>
