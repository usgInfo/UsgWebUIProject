

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){ 
$("input").keydown(function(event) {
    if (event.keyCode == 32) {
        event.preventDefault();
    }
});
});