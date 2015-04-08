$(document).ready(function(){

$('#header').hover(
function(){
$(this).addClass('active');
},
function(){
$(this).removeClass('active');
console.log('hi greg');
}
);

});
