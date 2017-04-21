$(function(){
    
    //  x Can you create a song array and add a song from each artist
    //  to the output while going through the names array only once?
    var song = [];
    song.push("Halo", "Vogue", "Where the Streets Have No Names", "Purple Rain", "Chained to the Rhythm", "Wrecking Ball");

    // x Can you add a "song" key to the Beyonce person with a value "Halo"?

    // x Super bonus: can you add a "songs" key to the Beyonce person
    //  make the value equal an array like ["Halo","All the Single Ladies","Lemonade"]
    //  using if(index=="songs") { } add each song to the output using a for loop on the
    //  songs array
    
    var output = "For Loop an Array\n";

    //names is an array
    //all arrays are objects
    //arrays have index/value pairs
    //arrays are just objects that have sequential indexes (0,1,2,3, etc..)
    var names = ["Beyonce","Madonna","Bono","Prince","Katy","Miley"];
    for(var i = 0; i < names.length; i++)
    {
        
        output += i + " = " + names[i] + " - " + song[i] + "\n";
    }

    output += "------------------\n";
    output += "For Loop an Object\n";
    
    //person is an object
    //objects have key/value pairs
    //the key can be a string or an integer
    //the value can be a string, integer, array, object or even a function
    var person = {
        "moniker": "Beyonce",
        "name": "Beyoncé Giselle Knowles-Carter",
        "gender": "female"
    }

    person["song"] = "Halo";
    person["song"] = ["Halo","All the Single Ladies","Lemonade"];
    
    for(index in person)
    {
        var value = person[index];
        output += index + " = " + value +  "\n";
    }

    $('#output').text(output);
});
