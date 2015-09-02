var $dialog;
$(function() {
	
	$("#acdnmenu a").click(function() {
		$("#acdnmenu a").css("font-weight","normal").css("color","white");
	    $(this).css("font-weight","bold").css("color","orange");
	});
	
	/*$('#justified-button-bar .btn').tooltip({
		  placement: 'bottom',
		  container: 'body'});*/

});

function setPopUpPosition(bottonObject, divObject){
	var left = $(bottonObject).position().left;
    var top = $(bottonObject).position().top;
    $(divObject).css({
        top: top -200 + "px",
        left: left + 300 + "px"
    }).show().draggable();
}


function popUpOpener(pageUri){
	var winl = (screen.width) / 2 - 450+"px";
	var wint = (screen.height) / 2 - 250+"px";
	var property = "center=1,resizable=1,left="+winl+",top="+wint+",menuBar=no,width=950,height=500px,scrollbars=yes,modal=yes,directories=no";
	//url=url+"&t="+getCurrentTime();
	childWnd= window.open(pageUri,"",property);
}	

function saveLine(){
	alert('save');
}