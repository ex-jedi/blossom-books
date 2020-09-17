<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="css/universal.css">
	<link rel="stylesheet" href="css/legals.css">
	<!-- Typekit -->
	<script src="https://use.typekit.net/kbq2qtf.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
	<!-- Perch Meta -->
	<?php
$domain        = 'https://'.$_SERVER["HTTP_HOST"];// TODO: Check Protocol
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

<!-- Cookie Consent -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
	<script>
	window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#000"
			},
			"button": {
				"background": "transparent",
				"text": "#fff",
				"border": "#fff"
			}
		},
		"content": {
			"href": "/privacy-and-cookie-policy"
		}
	})});
	</script>

</head>
<body>
  <div class="site-wrapper legals-wrapper">
    <header class="main-header legals-header">
				<?php perch_content('Header Title'); ?>
				<nav class="main-nav-wrapper legals-nav">
					<?php perch_pages_navigation(array(
								'hide-extensions' => true,
						)); ?>
				</nav>
    </header>
