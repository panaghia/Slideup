/*
description: Slideup
license: MIT-STYLE

authors:
- Sergio Panagia (http://panaghia.it)

*/

(function()
{
	Slideup = function(onEl, offEl, dialogEl, onCloseFn)
	{
		this.onEl = document.getElementById(onEl); 
		this.offEl = document.getElementById(offEl);
		this.dialogEl = document.getElementById(dialogEl);
		this.onCloseFn = onCloseFn; 
		this.addEvents();   	
	};
	 
	Slideup.prototype.addEvents = function()
	{
		var that = this;
		this.onEl.addEventListener('click', function(e)
		{
			e.preventDefault();
			var viewportHeight = window.innerHeight;      
		    that.dialogEl.style.top = viewportHeight+'px';
			that.dialogEl.style.height = parseInt(viewportHeight+45)+'px';
			that.dialogEl.style.display = 'block';
			//that.dialogEl.style.webkitTransform = 'translate3d(0, 0, 0)';
			
			setTimeout(function()
			{
				that.dialogEl.style.webkitTransform = 'translate3d(0, -'+parseInt(viewportHeight+45)+'px, 0)';
			}, 100);   	   
		}, false);  
		this.offEl.addEventListener('click', function(e)
		{        
			e.preventDefault();
			var viewportHeight = window.innerHeight;
			that.dialogEl.style.webkitTransform = 'translate3d(0, 0px, 0)';    		
			setTimeout(function()
			{
				that.dialogEl.style.display = 'none'; 
				if(that.onCloseFn!==undefined)
			   		that.onCloseFn.call(that);
			}, 300);		   
		}, false);		
	};
})();