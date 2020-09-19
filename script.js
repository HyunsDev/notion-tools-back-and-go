var output = "";

$(function() {
    if (localStorage.getItem('mode') === "night") {
        $("#mode").addClass("night");
        $("#mode").removeClass("day");
    }
    
    $("body").dblclick(function(){
        if ($("#memu").hasClass("show")) {
            $("#memu").removeClass("show");
        } else {
            $("#memu").addClass("show");
        }
        
    });
    
    $("#memu").click(function(){
        if ($("#mode").hasClass("day")) {
            $("#mode").addClass("night");
            $("#mode").removeClass("day");
            localStorage.setItem('mode', 'night');
            
        } else {
            $("#mode").addClass("day");
            $("#mode").removeClass("night");
            localStorage.setItem('mode', 'day');
        }
        
    });
});
