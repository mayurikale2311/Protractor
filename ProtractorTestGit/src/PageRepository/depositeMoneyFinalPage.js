var data= require('../Utilities/data.json');
var depositeMoneyFinalPage= function(){
	

	var optionsacts=  element.all(by.options('account for account in Accounts'));
	var depoButton= element(by.xpath("//div[@class='center']//button[2]"));
	var amount= element(by.model("amount"));
	var depbutton= element(by.className("btn btn-default"));
	var depoConfirm= element(by.xpath("//div[@class='center']//button[1]"));
	
	
	
	this.accounts=function(){
		optionsacts.then(function(no){
			   no[2].click();
			   browser.sleep(3000);
		   }); 
		
		return this;
		
	}
	
	this.deposit= function(){
		depoButton.click();
		return this;
	}
	
	this.amt= function(){
		amount.sendKeys('data.Fvalue');
		return this;
	}
	
	this.depo= function(){
		depbutton.click();
		return this;
		
		}
	
	this.confirmdepo= function(){
		depoConfirm.click();
		return require('./transactionTablePage.js');
		
	}
	
	
}

modeule.exports= new depositeMoneyFinalPage();



















/*element.all(by.options('account for account in Accounts')).then(function(no){
no[2].click();
browser.sleep(3000);
}); 
element(by.xpath("//div[@class='center']//button[2]")).click();
browser.sleep(3000);

element(by.model("amount")).sendKeys(2000);
browser.sleep(2000);
element(by.className("btn btn-default")).click();
browser.sleep(2000);
element(by.xpath("//div[@class='center']//button[1]")).click();
browser.sleep(2000);

element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end').row(0)).getText().then(function(tableData){

console.log(tableData);
//browser.sleep(2000);
}); */