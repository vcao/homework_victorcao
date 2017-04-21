$(function(){

    $('#showArrays').click(function(){
        var weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
        var weekends = ['Saturday', 'Sunday'];
        var days = [];

        //How many items are in each array?
        //Your answer: 5 in weekdays array, 2 in weekend array

        //What is the first index of each array?
        //Your answer: Monday, Saturday

        //What is the last index of each array?
        //Your answer:friday, Sunday

        //Can you remove a day from weekdays?
        weekdays.pop();

        //Can you add "Friday" to the weekends array?
        weekends.push("Friday");

        //With 1 line of code can you convert the weekends array to read: "Friday","Saturday","Sunday"?
        weekends.sort();

        //Can you create an array called "days" that uses the two arrays above to create 1 array with all 7 days?
        days = weekdays.concat(weekends);

        showArrays(weekdays, weekends, days);
    });

    //Custom functions to show you the arrays above
    function showArrays(weekdays, weekends, days)
    {
        $('#output').text(''); //reset
        $('#output').append(dump(weekdays));
        $('#output').append('---------------------------\n');
        $('#output').append(dump(weekends));
        $('#output').append('---------------------------\n');
        $('#output').append(dump(days));
    }

    function dump(arr,level) {
        var dumped_text = "";
        if(!level) level = 0;
        
        //The padding given at the beginning of the line.
        var level_padding = "";
        for(var j=0;j<level+1;j++) level_padding += "    ";
        
        if(typeof(arr) == 'object') { //Array/Hashes/Objects 
            for(var item in arr) {
                var value = arr[item];
                
                if(typeof(value) == 'object') { //If it is an array,
                    dumped_text += level_padding + "'" + item + "' ...\n";
                    dumped_text += dump(value,level+1);
                } else {
                    dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                }
            }
        } else { //Stings/Chars/Numbers etc.
            dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
        }
        return dumped_text;
    }
});
