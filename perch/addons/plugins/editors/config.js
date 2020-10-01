Perch.UserConfig.redactor = (function() {
  const get = function(profile, config, field) {
    config.plugins = [];
    config.buttons = ['link', 'bold', 'italic', 'format', 'ol', 'ul', 'html'];
    config.formatting = ['p', 'h3', 'h4'];

    return config;
  };

  const load = function(cb) {
    jQuery.getScript(`${Perch.path}/addons/plugins/editors/redactor-plugins/alignment.js`, cb);
  };

  return {
    get,
    load,
  };
})();
