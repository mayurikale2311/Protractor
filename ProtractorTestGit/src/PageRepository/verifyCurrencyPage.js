
var data= require('../Utilities/data.json');

var verifyCurrencyPage=function(){
	
	var accountoptions= element.all(by.options('account for account in Accounts'));
	var pound= element(by.className("center"));
	var rupee= element(by.className("center"));
	var dollar= element(by.className("center"));
	var btn=  element(by.className("btn btn-lg tab"));
	
	this.actoptions= function(){
		accountoptions.then(function(no){
			   no[1].click();
		 });
		return this;
	}
	
	
	this.poundVerify= function(){
		var actual1= pound.getText();
		expect(actual1).toBe('data.Cvalue');
		return this;
		
	}
	
	this.rupeeVerify= function(){
		var actual2= rupee.getText();
		expect(actual2).toBe('data.Dvalue');
		return this;
		
	}
	
	this.dollarVerify= function(){
		var actual3= dollar.getText();
		expect(actual3).toBe('data.Evalue');
		return this;
		
	}
	
	this.button= function(){
		btn.click();
		return require('./initialTransactionPage.js');
	}
}
	
	module.exports= new verifyCurrencyPage();
	
	
	
	
	
	
	
	
	
	
	
	
	
	













