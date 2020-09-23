<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/css/universal.css">
		<link rel="stylesheet" href="/css/blog.css">
		<!-- Typekit -->
		<link rel="stylesheet" href="https://use.typekit.net/ytg3fuz.css">
		<!-- Perch Meta -->
		<?php
			$domain        = 'https://'.$_SERVER["HTTP_HOST"];
			$mainurl           = perch_page_url(array(
												    'hide-extensions'    => true,
												    'hide-default-doc'   => true,
												    'add-trailing-slash' => false,
												    'include-domain'     => true,
												), true);
			$mainsitename      = "Site Name";
			$pagetitlename = " - Site Name";
			$sharing_image = '/images/default_fb_image.jpg';

			PerchSystem::set_var('domain',$domain);
			PerchSystem::set_var('mainurl',$mainurl);
			PerchSystem::set_var('mainsitename',$mainsitename);
			PerchSystem::set_var('pagetitlename',$pagetitlename);
			PerchSystem::set_var('sharing_image',$sharing_image);

			perch_page_attributes(array(
				'template' => 'default.html'
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
		<div itemscope itemtype="https://schema.org/LocalBusiness" class="site-wrapper blog-wrapper>">
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
