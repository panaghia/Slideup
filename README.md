Slideup is a JavaScript plugin to create slideup dialog in iOs-style.

Best fit with iUI framework; works everywhere since written in pure JavaScript.

==========
How to use  

HTML:

	<div id="index" title="Main page">
		<button id="openDialog">Show dialog</button>
		
		<!-- this is the dialog panel to show -->
		<div id="dialogPanel" class="slideup">
			<div class="toolbar">
				<button id="closeDialog">Close</button>
			</div>   	
		</div> 
		<!-- end -->   
	</div> 
	 
Javascript: 

	var switchOnElement = 'openDialog';
	var switchOffElement = 'closeDialog';
	var dialogElement = 'dialogPanel';
	var slideup = new Slideup(switchOnElement, switchOffElement, dialogElement,
	onCloseFn = function()
	{
		//fired on dialog close, optional			
	});   

==========
License: MIT-STYLE  
Beta version