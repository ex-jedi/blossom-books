<?php include('perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<?php perch_layout("main-header-end"); ?>
<main class="main-content homepage-main-content" id="main-content">
  <?php perch_content("Section One"); ?>
  <?php perch_content("Section Two"); ?>
  <?php perch_content("Main Contact Form"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end-js'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->

