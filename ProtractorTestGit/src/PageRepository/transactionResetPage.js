var transactionResetPage= function(){
	
	
	   var reset= element(by.xpath("//button[contains(text(),'Reset')]"));
	   var logout= element(by.xpath("//button[@class='btn logout']"));
	   
	   this.resetbutton= function(){
		   reset.click();
		   return this;
		   
		  }
	   
	   this.logoutbutton= function(){
		   logout.click();
		   
		   
	   }
	
	
	module.exports= new transactionResetPage();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}