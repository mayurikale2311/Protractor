
var customerLoginPage= function(){
	
	
	var cusDropdown= element.all(by.repeater('cust in Customers'));
	var loginButton=  element(by.buttonText("Login"));
	
	this.cusDropdown= function(){
		cusDropdown..then(function(value){
			   value[1].click();
			  });
		 return this;
	}
	
	this.loginButton= function(){
		loginButton.click();
		return require('./verifyCurrencyPage.js')
	}
	
	
}
module.exports= new customerLoginPage();
	
	
	
