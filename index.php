<?php include('perch/runtime.php'); ?>
<?php perch_layout('main-header'); ?>
<main class="main-content homepage-main-content" id="main-content">
  <?php perch_content("Section One"); ?>
  <?php perch_content("Section Two"); ?>
</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('main-footer-end-js'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->

