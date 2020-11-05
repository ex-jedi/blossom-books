<?php include('perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<?php perch_layout("empty-header-end"); ?>
<main class="main-content error-page-main-content" id="main-content">
	<?php perch_content("404 Page Content"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('error-page-footer-end-js'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->

