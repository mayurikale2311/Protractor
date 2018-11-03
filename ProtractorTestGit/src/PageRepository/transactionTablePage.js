var transactionTablePage= function(){
	
	var tableData= element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end');
	var backButn= element(by.xpath("//button[contains(text(),'Back')]"));
	
	this.table= function(){
		
		tableData..row(0)).getText().then(function(tableData){
			   
			   console.log(tableData);
			   //browser.sleep(2000);
		   }); 
	return this;
		}
	
	
	this.backto= function(){
		
		backButn.click();
		return.require('./withdrawErrorPage.js');
		
	}
}

module.exports= new transactionTablePage();



