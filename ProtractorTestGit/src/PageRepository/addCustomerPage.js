var data= require('../Utilities/data.json');

var addCustomerPage= function(){
	
	var search= element(by.model("searchCustomer"));
	
	var delete= element(by.xpath("//tbody//tr[1]//td[5]//button[1]"));
	
	var home= element(by.xpath("//button[@class='btn home']"));
	
	this.searchCust= function(){
		search.sendKeys('data.Qvalue');
		return this;
		
	}
	
	this.deleteCust= function(){
		delete.click();
		return this;
	
	}
	this.Homepage=function(){
		home.click();
		
		
	}
	
}

module.exports= new addCustomerPage();

