  function slideStartMenu() {
    $('#startMenuDropDown #startMenuDashboard').slideToggle({
      direction: "up"
    }, 300);
    $(this).toggleClass('startMenuClose');
  } // end click
 
 function WhichButton (event) 
 {
		// all browsers except IE before version 9
	if ('which' in event) {
		switch (event.which) {
		case 1:
			break;
		case 2:
			break;
		case 3:
			event.preventDefault();
			event.stopPropagation();
			
			var brick;
			brick = "<div class='brick small'><button class='desktopIcon' onClick='openWindow('Notepad');'><img src='images/appicons/notepad.png'/></button></div>";
			$('.gridly').append(brick);
			return $('.gridly').gridly();
			break;
		}
	}
	else {
			// Internet Explorer before version 9
		if ('button' in event) {
			var buttons = "";
			if (event.button & 1) {
				buttons += "left";
			}
			if (event.button & 2) {
				if (buttons == "") {
					buttons += "right";
				}
				else {
					buttons += " + right";
				}
			}
			if (event.button & 4) {
				if (buttons == "") {
					buttons += "middle";
				}
				else {
					buttons += " + middle";
				}
			}
			alert ("The following buttons are pressed: " + buttons);
		}
	}
}