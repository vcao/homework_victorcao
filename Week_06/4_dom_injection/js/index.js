$(function(){
    
    var songs = ["Halo"];
    var artists = ["Beyonce"];
    var images = ["song.jpg"];

    for(var i = 0; i < songs.length; i++)
    {
        var string = "";
        string += '<div class="col-xs-3 song">';
        string +=     '<img src="./images/' + images[i] + '" class="img-thumbnail">';
        string +=     '<div class="title">' + songs[i] + '</div>';
        string +=     '<div class="artist">' + artists[i] + '</div>';
        string +=     '<button class="btn btn-success" value="' + songs[i] + '"><i class="fa fa-play"></i> Play</button>';
        string += '</div>';
        
        //can you take the html template you style and inject it into the DOM?

        //can you get the button to set the "Now Playing" <h3> tag to whatever is clicked?
        //  hint $('#songs').on('click','.btn', function(){});

        $('#songs').append(string);
    }
    $('#songs').on('click','.btn', function() {
        var currentSong = $(this).val();
        $('#songs').append('<h3>Now Playing: ' + currentSong + '</h3>');
    });
});
