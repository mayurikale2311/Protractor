var data= require('../Utilities/data.json');

var loginPage2= function(){
	  
	var cusLogin= element(by.buttonText("Customer Login"));
	var managerLogin= element(by.buttonText("Bank Manager Login"));
	var clickManagerLogin=  element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
	
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
			clickManagerLogin.click();
			return require('./managerLoginPage.js');
		}
		

	
}
	  
module.exports= new loginPage2();