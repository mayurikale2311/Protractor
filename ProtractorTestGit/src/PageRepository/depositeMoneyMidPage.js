
var depositeMoneyMidPage= function(){
	
	
	 var cusOptions= element.all(by.repeater('cust in Customers'));
	var logButton= element(by.buttonText("Login"));
	
	this.selectCus= function(){
		cusOptions.then(function(value){
			   value[1].click();
		   }); 
		return this;
	}
		this.logiButton= function(){
			logButton.click();
			return require('./depositeMoneyFinalPage.js');
			
		}
		
	
}

module.exports= new depositeMoneyMidPage();

















/*
  element.all(by.repeater('cust in Customers')).then(function(value){
		   value[1].click();
	   }); 
	   
	   element(by.buttonText("Login")).click();
		   browser.sleep(2000);
 */