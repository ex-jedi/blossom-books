<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
		<link rel="stylesheet" href="/css/blog.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/blog.css');?>">

		<!-- Typekit -->
		<link rel="stylesheet" href="https://use.typekit.net/ytg3fuz.css">

		<!-- Perch Meta -->
	 	<?php perch_blog_post_meta(perch_get('s'));

		perch_page_attributes(array(
			'template' => 'favicons.html'
		));

		?>
</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>" itemscope itemtype="http://schema.org/LocalBusiness">
		<!-- Cookie Warning -->
		<!-- TODO: Move to footer -->
		<?php perch_content("Cookie Warning"); ?>
			<header class="main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>

					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
					)); ?>
					<?php perch_content("Main Logo"); ?>
			</header>