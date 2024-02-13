$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    document.getElementById("letters").style.opacity = "0";

    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
        
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        document.getElementById("music").play();
        document.getElementById("letters").style.opacity = "1";
    }
    function close() {
        envelope.addClass("close").removeClass("open");
        document.getElementById("music").pause();
        document.getElementById("music").currentTime = 0;
        document.getElementById("letters").style.opacity = "0";
    }
   
});