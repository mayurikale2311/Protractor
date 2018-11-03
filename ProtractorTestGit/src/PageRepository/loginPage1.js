var data= require('../Utilities/data.json');

var loginPage= function(){
	  
	var cusLogin= element(by.buttonText("Customer Login"));
	var managerLogin= element(by.buttonText("Bank Manager Login"));
	var clickCustomerLogin= element(by.buttonText("Customer Login"));
	
	this.verifyCusLogin= function(){
		var actual1= cusLogin.getText();
		expect(actual1).toBe('data.Avalue');
		return this;
	}
	
	this.verifyManegerLogin= function(){
		var actual2= managerLogin.getText();
		expect(actual2).toBe('data.Bvalue');
		return this;
	}
	
		this.clickLogin function(){
			clickCustomerLogin.click();
			return require('./customerLoginPage.js');
		}
		

	
}
	  
module.exports= new loginPage();



