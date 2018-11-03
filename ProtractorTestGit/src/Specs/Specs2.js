
var data require(process.cwd()+'/src/Utilities/data.json');
var loginPage2= require(process.cwd()+'/src/PageRepository/loginPage2.js');

   describe(' Bank E2ETesting', function() {
   it('Manager Login Functional Test Case', function() {
   
	
	   browser.get("data.url");
	   browser.sleep(3000);
	  
	   loginPage2.verifyCusLogin();
	   loginPage2.verifyManegerLogin();
	   var managerLoginPage=loginPage2.clickLogin();
	   
	   managerLoginPage.addCust();
	   managerLoginPage.openCust();
	   managerLoginPage.checkCust();
	   managerLoginPage.addCustomer();
	   managerLoginPage.name();
	   managerLoginPage.last();
	   managerLoginPage.postalCode();
	   managerLoginPage.addClick();
	   var addCustomerPage=managerLoginPage.Customers();
	   
	   addCustomerPage.searchCust();
	   addCustomerPage.deleteCust();
	   addCustomerPage.Homepage();
	   
	   });

});

