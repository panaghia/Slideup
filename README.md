Slideup is a iUI mobile framework libray plugin to create slideup dialog in iOs style.

==========
How to use  

HTML:

	<div id="index" title="Main page">
		<a href="#" id="openDialog">Show dialog</a>
		
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