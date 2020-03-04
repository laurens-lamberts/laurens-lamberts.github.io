function openWindow(name){
    var popup = document.createElement('div');
    popup.className = 'window';
    popup.id = 'window1';
	
	var minimize = document.createElement('div');
    minimize.className = 'minimizeWindow';
    minimize.innerHTML = '-';
    minimize.onclick = function (e) 
	{
		popup.style.display = 'none';
	};
	
    var maximize = document.createElement('div');
    maximize.className = 'maximizeWindow';
    maximize.innerHTML = '&#9633;';
    maximize.onclick = function (e) 
	{
		popup.style.width = '99%';
		popup.style.height = '90%';
		popup.style.left = '0px';
		popup.style.top = '0px';
		popup.style.position = 'absolute';
		popup.style.marginTop = '0px';
	};
	
    var close = document.createElement('div');
    close.className = 'closeWindow';
    close.innerHTML = 'x';
    close.onclick = function (e) 
	{
		popup.parentNode.removeChild(popup);
		button.style.display = 'none';
	};
	
	var button = document.createElement('button');
	button.className = 'taskbarprogram';
	
	button.onclick = function (e) 
	{
		popup.style.display = 'block';
	};
	
    var message = document.createElement('span');
	message.innerHTML = name + "<hr />";
	
	switch(name)
	{
		case 'Calculator':
			button.innerHTML = "<img src=\"images/appicons/calculator.png\"/>";
			message.innerHTML += "<input id=\"calculatorValue\" type=\"text\" style=\"width: 99%; height: 20%; text-align:right; font-size: 2em;\" value=\"0\" disabled></input>\
			<div id='calculatorcontrols'>\
			<table id='calculatorTable'>\
			<tr>\
			<td><button class='calculatorbutton'>MC</button></td>\
			<td><button class='calculatorbutton'>MR</button></td>\
			<td><button class='calculatorbutton'>MS</button></td>\
			<td><button class='calculatorbutton'>M+</button></td>\
			<td><button class='calculatorbutton'>M-</button></td>\
			</tr><tr>\
			<td><button class='calculatorbutton'>&larr;</button></td>\
			<td><button class='calculatorbutton' onClick=\"clearCalculator();\">CE</button></td>\
			<td><button class='calculatorbutton' onClick=\"clearCalculator();\">C</button></td>\
			<td><button class='calculatorbutton' onClick=\"invertCalculator();\">&plusmn;</button></td>\
			<td><button class='calculatorbutton'>&radic;</button></td>\
			</tr><tr>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('7');\">7</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('8');\">8</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('9');\">9</button></td>\
			<td><button class='calculatorbutton'>/</button></td>\
			<td><button class='calculatorbutton'>%</button></td>\
			</tr><tr>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('4');\">4</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('5');\">5</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('6');\">6</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('*');\">*</button></td>\
			<td><button class='calculatorbutton'>1/x</button></td>\
			</tr><tr>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('1');\">1</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('2');\">2</button></td>\
			<td><button class='calculatorbutton' onClick=\"insertCalculator('3');\">3</button></td>\
			<td><button class='calculatorbutton'>-</button></td>\
			<td rowspan='2'><button class='calculatorbutton' onClick=\"calculate();\">=</button></td>\
			</tr><tr>\
			<td colspan='2'><button class='calculatorbutton' onClick=\"insertCalculator('0');\">0</button></td>\
			<td><button class='calculatorbutton'>,</button></td>\
			<td><button class='calculatorbutton'>+</button></td>\
			</tr>\
			</table></div>";
			popup.style.width = '222px';
			popup.style.height = '377px';
			break;
		case 'Notepad':
			button.innerHTML = "<img src=\"images/appicons/notepad.png\"/>";
			var noteText = getCookie('notes');
			message.innerHTML += "<textarea id=\"mynotes\" name=\"mynotes\" style=\"width: 100%; z-index: 999999999999; margin: 0; padding: 0; height: 80%; resize: none;\">" + noteText + "</textarea><button onClick=\"alert('Note saved!'); setCookie('notes', $('#mynotes').val(), 90);\">Save</button>";
			break;
		case 'Control Panel':
			button.innerHTML = "<img src=\"images/appicons/controlpanel.ico\"/>";
			message.innerHTML += "<h2>Change Wallpaper</h2><img src='images/wallpapers/wallpaper.jpg' class='controlPanelImage' onClick=\"changeWallpaper(src);\"/><img src='images/wallpapers/wallpaper2.jpg' class='controlPanelImage' onClick=\"changeWallpaper(src);\"/>";
			popup.style.width = '405px';
			popup.style.height = '173px';
			break;
		case 'Google Chrome':
			button.innerHTML = "<img src=\"images/appicons/chrome.ico\"/>";
			popup.style.width = '99%';
			popup.style.height = '90%';
			popup.style.left = '0px';
			popup.style.top = '0px';
			popup.style.position = 'absolute';
			popup.style.marginTop = '0px';
			
			message.innerHTML += "<div id='browser'><object type=\"text/html\" data=\"http://www.laurenslamberts.nl\"\"></object>";
			break;
		case 'Mozilla Firefox':
			button.innerHTML = "<img src=\"images/appicons/firefox.png\"/>";
			popup.style.width = '99%';
			popup.style.height = '90%';
			popup.style.left = '0px';
			popup.style.top = '0px';
			popup.style.position = 'absolute';
			popup.style.marginTop = '0px';
			
			message.innerHTML += "<div id='browser'><object type=\"text/html\" data=\"http://www.laurenslamberts.nl\" id='chromebrowser'\"></object>";
			
			break;
	}

	popup.appendChild(close);
	popup.appendChild(maximize);
	popup.appendChild(minimize);
    popup.appendChild(message);             

	document.getElementById('taskbar').appendChild(button);
	
    document.body.appendChild(popup);
	
	$(popup).resizable({
	  maxHeight: 1000,
      maxWidth: 1850,
      minHeight: 190,
      minWidth: 200,
	});	
	$(popup).draggable();
}