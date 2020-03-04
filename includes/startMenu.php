<div id="startMenuDropDown">
  <div id="startMenuDashboard">
    <div id="startMenuDiv">
		<div id="startMenuLeftDiv">
			<button class="startMenuApp" onmousedown="WhichButton (event);" onClick="openWindow('Calculator'); slideStartMenu();">
			<img class="startMenuAppImage" src="images/appicons/calculator.png"/><p class="startMenuAppText">Calculator</p>
			</button>
			<button class="startMenuApp" onmousedown="WhichButton (event);" onClick="openWindow('Notepad'); slideStartMenu();">
			<img class="startMenuAppImage" src="images/appicons/notepad.png"/><p class="startMenuAppText">Notepad++</p>
			</button>
			<button class="startMenuApp" onmousedown="WhichButton (event);" onClick="openWindow('Google Chrome'); slideStartMenu();">
			<img class="startMenuAppImage" src="images/appicons/chrome.ico"/><p class="startMenuAppText">Google Chrome</p>
			</button>
			<button class="startMenuApp" onmousedown="WhichButton (event);" onClick="openWindow('Mozilla Firefox'); slideStartMenu();">
			<img class="startMenuAppImage" src="images/appicons/firefox.png"/><p class="startMenuAppText">Mozilla Firefox</p>
			</button>		
		</div>
		<div id="startMenuRightDiv">
			<img class="startMenuUserImage" src="images/user.png" id="userAccountImage"/>
			<button class="startMenuAppRight" onClick="openWindow('Control Panel'); slideStartMenu();">
				<p class="startMenuAppTextRight">Control Panel</p>
			</button>
		</div>
    </div>
  </div>
</div>