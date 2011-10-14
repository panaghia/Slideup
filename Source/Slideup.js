/*
description: Slideup
license: MIT-STYLE

authors:
- Sergio Panagia (http://panaghia.it)

*/

(function()
{
	Slideup = function(onEl, offEl, dialogEl, onCloseFn, toolbarOffset)
	{
		this.onEl = document.getElementById(onEl); 
		this.offEl = document.getElementById(offEl);
		this.dialogEl = document.getElementById(dialogEl);
		this.onCloseFn = onCloseFn;
		this.toolbarOffset = toolbarOffset;
		this.addEvents();   	
	};     
	
	Slideup.prototype.getDocumentHeight = function()
	{

	    var D = document;
	    return Math.max(
	        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
	        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
	        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	    );

	};     
	
	Slideup.prototype.dismiss = function()
	{
		var viewportHeight = window.innerHeight;
		this.dialogEl.style.webkitTransform = 'translate3d(0, 0px, 0)';
		var that = this;    		
		setTimeout(function()
		{
			that.dialogEl.style.display = 'none'; 
			if(that.onCloseFn!==undefined)
		   		that.onCloseFn.call(that);
		}, 300);   	
	}
	 
	Slideup.prototype.addEvents = function()
	{
		var that = this;
		this.onEl.addEventListener('click', function(e)
		{
			e.preventDefault(); 
			var viewportHeight = that.getDocumentHeight();      
		    that.dialogEl.style.top = viewportHeight+'px';
			that.dialogEl.style.minHeight = viewportHeight+'px';
			that.dialogEl.style.display = 'block';       
			
			//that.dialogEl.style.webkitTransform = 'translate3d(0, 0, 0)';
			
			setTimeout(function()
			{                       
				
				if(that.toolbarOffset === undefined)                 
					that.dialogEl.style.webkitTransform = 'translate3d(0, -'+parseInt(viewportHeight+45)+'px, 0)';
				else
					that.dialogEl.style.webkitTransform = 'translate3d(0, -'+parseInt(viewportHeight+that.toolbarOffset)+'px, 0)';
			}, 100);   	   
		}, false);  
		this.offEl.addEventListener('click', function(e)
		{        
			e.preventDefault();
			that.dismiss();		   
		}, false);		
	};
})();