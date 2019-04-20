$(html).scroll(function() {    
    var scroll = $(html).scrollTop();

    if (scroll >= 200) {
       alert("Hello");
    } 
});