var data= require('../Utilities/data.json');

var managerLoginPage=function(){

	
	var add= element(by.xpath("//div[@class='center']//button[1]"));
	
	var open= actual9=element(by.xpath("//div[@class='center']//button[2]"));
	
	var cust= element(by.xpath("//div[@class='center']//button[3]"));
	
	var addclick= element(by.xpath("//div[@class='center']//button[1]"));
	
	var sendname= element(by.xpath("//input[@placeholder='First Name']"));
	
	var sendlast= element(by.xpath("//input[@placeholder='Last Name']"));
	
	var post= element(by.xpath("//input[@placeholder='Post Code']"));
	
	var click= element(by.xpath("//button[@type='submit']"));
	
	var cusClick= element(by.xpath("//div[@class='center']//button[3]"));
	
	this.addCust= function(){
		var actual11= add.getText();
		 expect(actual9).toBe('data.Kvalue');
		return this;
		
	}
	
	
	this.openCust= function(){
		var actual12= open.getText();
		 expect(actual12).toBe('data.Lvalue');
		return this;
	}
	this.checkCust= function(){
		var actual13= cust.getText();
		 expect(actual13).toBe('data.Mvalue');
		return this;
	}	
	
	this.addCustomer= function(){
		addclick.click();
		return this;
		}
	
	this.name= function(){
		sendname.sendKeys('data.Nvalue');
		return this;
	}
	this.last= function(){
		sendlast.sendKeys('data.Ovalue');
		return this;
	}
	
	this.postalCode= function(){
		post.sendKeys('data.Pvalue');
		return this;
	}
	
	this.addClick= function(){
		click.click();
		browser.switchTo().alert().accept();
		return this;
	}
	
	this.Customers= function(){
		cusClick.click();
		return require('addCustomerPage.js');
		
	}
	
}

module.exports= new  managerLoginPage();