var data require(process.cwd()+'/src/Utilities/data.json');
var loginPage1= require(process.cwd()+'/src/PageRepository/loginPage1.js');


  describe(' Bank E2E Testing', function() {
  it('Customer Login Functional Test Cases', function() {
	  
	   browser.get("data.url");
       browser.sleep(3000);
       
       loginPage1.verifyCusLogin();
       loginPage1.verifyManegerLogin();
       var customerLoginPage= loginPage1.clickLogin();
       
       customerLoginPage.cusDropdown();
       var verifyCurrencyPage=customerLoginPage.loginButton();
       
       verifyCurrencyPage.actoptions();
       verifyCurrencyPage.poundVerify();
       verifyCurrencyPage.rupeeVerify();
       verifyCurrencyPage.dollarVerify();
       var initialTransactionPage=verifyCurrencyPage.button();
      
       var depositeMoneyInitialPage=initialTransactionPage.backButton();
      
       var depositeMoneyMidPage=depositeMoneyInitialPage.loginto();
       depositeMoneyMidPage.selectCus();
       
       var depositeMoneyFinalPage=depositeMoneyPage.logiButton();
       depositeMoneyFinalPage.accounts();
       depositeMoneyFinalPage.deposit();
       depositeMoneyFinalPage.amt();
       depositeMoneyFinalPage.depo();
       var transactionTablePage=depositeMoneyFinalPage.confirmdepo();
       
       transactionTablePage.table();
       var withdrawErrorPage=transactionTablePage.backto();
       
       withdrawErrorPage.trans();
       withdrawErrorPage.amot();
       withdrawErrorPage.withdraw();
       withdrawErrorPage.errormsg();
       withdrawErrorPage.nextTrans();
       withdrawErrorPage.nextamot();
       withdrawErrorPage.nextwithdraw();
       withdrawErrorPage.successrmsg();
       var transactionResetPage=withdrawErrorPage.checkTable();
       
       transactionResetPage.resetbutton();
       transactionResetPage.logoutbutton();
       
  });

});