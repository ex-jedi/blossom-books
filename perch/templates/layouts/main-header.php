<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime(__DIR__.'../../../../css/main.css');?>">
	<?php $page_css_file	=  perch_page_attribute('css', array('template' => 'bits.html'), true); ?>
	<link rel="stylesheet" href="<?php echo $page_css_file ?>?v=<?= filemtime(__DIR__.'../../../../'.$page_css_file);?>">
	<!-- Typekit  -->
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
	$mainsitename      = "Blossom Books";
	$pagetitlename = " - Blossom Books";
	// Needs to be put in images folder
	$sharing_image = '/images/default-facebook-image.png';

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
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>" itemscope itemtype="http://schema.org/LocalBusiness">
		<header class="main-header">
			<a class="show-on-focus"  href="#main-content">Skip to main content</a>
				<?php perch_pages_navigation(array(
						'hide-extensions' => true,
				)); ?>
			<!-- Skip to main content link  -->
			<?php perch_content("Main Logo"); ?>
