function getClockTime()
{
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   if (hour   > 24) { hour = hour - 24;      }
   if (minute < 10) { minute = "0" + minute; }
   var timeString = hour + ':' + minute;
   document.getElementById('time').innerHTML = timeString;
   document.getElementById('date').innerHTML = now.getDate() + '-' + (now.getMonth()+1) + '-' + now.getFullYear();  
}