1. The calendar functions as it should with the blocks of time turning the proper shades based on the current time of the users local time. The proper time and date will also be displayed at the top.
2. I have added a clear button at the bottom of the calendar so that if the user wants to clear things of the schedule all they must do is hit the button and refresh the page.
3. Otherwise the items saved on the calendar will remain no mattter the refreshes.
4. I tried looping it in a $(documnet).ready(function(){}) however, this caused an event listener not to work and there does not seem to be any consequences at the moment for not having it.
5. This code snippet is responsible for applying the class to the div depending on the current time.
   [Snipets of Code](/Screenshot-of-class-code.png)
