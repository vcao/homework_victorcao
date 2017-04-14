
$(function(){
    var cart = []; // initialize the cart object

    // update Cart
    function updateCart() {
        $('#cart').html('');
        var string = '';
        for(meal in cart) {
          // string += '<h2>' + meal + '</h2>';
          for (food in cart[meal]) {
            string += '<div class="row">';
            string += '   <div class="col-xs-6">';
            string += food;
            string += '   </div>';
            string += '   <div class="col-xs-6 text-right">';
            string += '      <button class="remove btn btn-xs btn-danger" data-meal="' + meal + '" value="' + food + '">Remove</button>  <span class="badge badge-pill badge-primary pull-right">' + cart[meal][food] + '</span><br>';
            string += '   </div>';
            string += '</div>';
          }      
        }
        $('#cart').append(string);
    }


    // remove from cart
    $('#cart').on('click', '.remove', function() {
        // set values of record
        var meal = $(this).attr("data-meal");
        var item = $(this).val();
        cart[meal][item] = cart[meal][item] - 1; // subtract one of these items

        if(cart[meal][item] < 1) {
          delete cart[meal][item]; // if the item is less than 1, delete the object so it doesn't show 0 or a negative number
        }
        updateCart(); //every time you remove, update the cart view
    });
     

            
    // add to Cart
    $('#menu').on('click','.order', function() {
          var meal = $(this).attr("data-meal");
          var item = $(this).val();
          
          if(!cart[meal][item]) { //if this item doesn't exist, set one
            cart[meal][item] = 1;
          } else {
            cart[meal][item]++; //if it does exist, add another
          }
          updateCart(); // update the cart view
    });


    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    });
    
    $('#apiRequestButton').click(function(clickEvent){
        console.log("I want to make an API request");

        $.get("https://headshot.mockable.io/menu", function(response) {
           $('#menu').html(''); //reset menu

            for (meal in response) {
              var items = response[meal];
              var string = "";
              string += '<h4 class="list-group-heading">' + meal + '</h4>';

              for (var i = 0; i < items.length; i++ ) {
                string += '<li class="list-group-item">' + items[i];
                string += '  <button class="btn btn-xs btn-success pull-right order" value="'+ items[i] +'" data-meal=' + meal + '>Add to Order</button>';  
                string += '</li>';
              }
              
              $('#menu').append(string);   
              cart[meal] = {};
           }
        });
    });

});