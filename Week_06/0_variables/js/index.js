$(function(){

    $('#showVariable').click(function(){
        var variable = $('#variable').val(); //will always be a "string"

        //can you convert it to an integer?
        variable = parseInt(variable);
        console.log(typeof(variable));
        //can you convert it to a float?
        variable = parseFloat(variable);
        console.log(typeof(variable));
        //can you add 1 to it?
        variable += 1;
        console.log(typeof(variable));
        console.log(variable);
        //can you add 10 to it?
        variable += 10;
        console.log(variable);
        //can you turn it into a string?
        variable.toString();
        console.log(typeof(variable));
        //can you add " is awesome" to the it?
        variable += " is awesome";
        console.log(typeof(variable));
        $('#output').text(variable);
    });

});
