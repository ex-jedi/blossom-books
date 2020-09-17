<?php
    define('PERCH_LICENSE_KEY', 'XXXXXXXXX');

    define("PERCH_DB_USERNAME", 'master_control');
    define("PERCH_DB_PASSWORD", 'roygbiv');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "XXXXXX");
    define("PERCH_DB_PREFIX", "perch3_");

    define('PERCH_TZ', 'UTC');

    define('PERCH_EMAIL_FROM', 'mark@pixelsmiths.co.uk');
    define('PERCH_EMAIL_FROM_NAME', 'Mark Phoenix');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', __DIR__));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');

    define('PERCH_HTML5', true);
    define('PERCH_CUSTOM_EDITOR_CONFIGS', true);

    define('PERCH_PARANOID', true);
    define('PERCH_PRODUCTION_MODE', 'PERCH_DEVELOPMENT');
    // define('PERCH_DEBUG', true);