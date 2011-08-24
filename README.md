Slideup is a iUI mobile framework libray plugin to create slideup dialog in iOs style.

==========
How to use

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

	var slideup = new Slideup(switchOnElement, switchOffElement, dialogElement,
		onCloseFn = function()
		{
			//fired on dialog close, optional			
		});