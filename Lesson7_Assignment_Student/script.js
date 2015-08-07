/**
* Created with LIS2360_Lesson7_jQuery.
* User: bke13b
* Date: 2015-08-07
* Time: 10:33 AM
   <!--
      Project Name:  Recipe Display Application
      Author: Berline Exantus
      Date:   08/06/15

      Filename: script.js
   --> 
* To change this template use Tools | Templates.
*/

function display(event){
    $(event.currentTarget).next().fadeIn("slow");
} // end of display event
$("h3").click(display);
