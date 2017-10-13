$(function(){
    // установка одинаковой высоты div
    function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function(){
                currentHeight = $(this).height();
                //currentHeight = $(this).outerHeight(true);
                if(currentHeight > tallestcolumn){
                    tallestcolumn  = currentHeight;
                }
            });
    columns.height(tallestcolumn);
    }
    setEqualHeight($("#container, #left, #right"));
});