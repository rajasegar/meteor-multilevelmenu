Package.describe({
  name: 'multilevelmenu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple menu with multiple levels and an optional breadcrumb navigation and back button.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rajasegar/MultiLevelMenu',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('multilevelmenu.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('multilevelmenu');
  api.addFiles('multilevelmenu-tests.js');
});
