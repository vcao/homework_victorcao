$(function(){

    $('#callFunction').click(function(){

        //call a function
        say("Kimi", "Good morning,")

        //can you pass sayHello a name and have it output "Hello " + name?
        
        //can you create a function sayGoodbye()?

        //can you create a function say() that takes TWO parameters: name and greeting
        // where you can pass a name and a greeting and it will say like "Hello Jonathan"
    });


    function sayGoodbye() {
        $('output').append('Bye, Felicia!');
    }

    function say(name, greeting) {
        $('#output').append(greeting + ' ' + name);
    }
    //This is a function definition or declaration
    //It begins with the word "function"
    //This is a named function
    function sayHello(name)
    {
        if(name)
        {
            $('#output').append("Hello " + name + "\n");
        }
    }
});
