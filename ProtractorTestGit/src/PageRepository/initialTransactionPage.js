
var initialTransactionPage= function(){
	
	 console.log('Table is empty');
	
	 
	 var backButton= element(by.className("btn"));
	
	this.back= function(){
		backButton.click();
		return require('./depositeMoneyInitialPage.js');
		
		
		
		
	}
}

module.exports= new initialTransactionPage();