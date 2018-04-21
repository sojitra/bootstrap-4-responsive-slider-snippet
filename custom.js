//Use Different Slider IDs for multiple slider
$(document).ready(function() {
    var item = '#slider-1 .carousel-item';
    var item_inner = "#slider-1 .carousel-inner";
    classes = GetUnique(item);
    setcss(classes, item, item_inner);
    
    
    var item_1 = '#slider-2 .carousel-item';
    var item_inner_1 = "#slider-2 .carousel-inner";
    classes = GetUnique(item_1);
    setcss(classes, item_1, item_inner_1);
});