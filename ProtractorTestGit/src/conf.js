var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:8090/wd/hub' ,

  
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  
  specs: ['./src/Specs/Specs2.js'],
    //specs: ['./src/Specs/Specs1.js'],
  
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
        	  takeScreenshots: true,
        	  //takeScreenshotsOnlyOnFailures: true
        })
     );
	  
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
