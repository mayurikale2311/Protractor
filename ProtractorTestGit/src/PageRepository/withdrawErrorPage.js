var withdrawErrorPage= function(){
	
var tran= element(by.xpath("//div[@class='center']//button[3]"));
	var amtt= element(by.xpath("//input[@placeholder='amount']"));
	var sub= element(by.xpath(" //button[@type='submit']"));
	var msg= element(by.xpath("//span[@class='error ng-binding']"));
	var tranTable= element(by.xpath("//div[@class='center']//button[1]"));
	
	
	 
	this.trans= function(){
		tran.click();
		return this;
	}
	
	this.amot=function(){
		 amtt.sendKeys('data.Gvalue');
		 return this;
			}
	
	this.withdraw=function(){
		
		sub.click();
		return this;
		
	}
	
	this.errormsg= function(){
		var actual5= msg.getText();
		 expect(actual5).toBe('data.Hvalue');
	      return this;
		
	}
	
	this.nextTrans= function(){
		tran.click();
		return this;
	
	}
	
	this.nextamot=function(){
		 amtt.sendKeys('data.Ivalue');
		 return this;
			}
	
	
this.nextwithdraw=function(){
		
		sub.click();
		return this;
		
}
	
this.successrmsg= function(){
	var actual6= msg.getText();
	 expect(actual6).toBe('data.Jvalue');	
	return this;
	
	
	}
	
	this.checkTable= function(){
		tranTable.click();
		return require(./transactionResetPage.js)
		
	}
	
	
}
	
	
modeule.exports= new withdrawErrorPage();
	
	
	
	
	
	
	
	
	
