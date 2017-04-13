$(function(){
    var products    = [
        {
            "item": "Curry 3s",
            "details": "Play like the best. Steph Curry's signature shoe",
            "image": "http://images.footlocker.com/pi/69279400/large/under-armour-curry-3-mens",
            "price": 200,
            "count": 0,
            "quantity": 20
        },
        {
            "item": "Satoni Men's Dress Shoes",
            "details": "Men's dress shoe for working professional",
            "image": "http://www.shoesandshirts.nl/img/santoni-livorno_200x200_1933.png",
            "price": 0,
            "count": 0,
            "quantity": 5
        },
        {
            "item": "Heels",
            "details": "Lookin good at work and at da club",
            "image": "http://picture-cdn.wheretoget.it/k/e/kecf20.jpg",
            "price": 500,
            "count": 0,
            "quantity": 8
        },
        {
            "item": "Sneakers",
            "details": "Casual wear for any occassion",
            "image": "https://ae01.alicdn.com/kf/HTB1_Ae3PpXXXXaUXVXXq6xXFXXX5/2017-Spring-Summer-Men-Sports-Running-Shoes-Newest-Man-Sneakers-Breathable-Mesh-Outdoor-Travel-Shoes-Comfortable.jpg_200x200.jpg",
            "price": 30.00,
            "count": 0,
            "quantity": 100
        },
        {
            "item": "Converse High Tops",
            "details": "Keep it classic",
            "image": "http://images.dresscodeclothing.com/thumbs/getThumb.aspx?file=http://images.dresscodeclothing.com/dimages/436877.aspx&width=200&height=200",
            "price": 99.00,
            "count": 0,
            "quantity": 50
        }
    ];
    var cart        = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var product = products[i];
        var image = product["image"] || 'default.jpg';
        var string = "";

        string += '<div class="col-xs-2">';
        string += '  <div class="product text-center">';
        string += '  <img class="img-thumbnail" src="' + image +'"/>';
        string += '  <div class="title">' + product["item"] + '</div>';
        string += '  <div class="price">' + product["price"].toFixed(2) + '</div>';
        string += '  <div class="details">' + product["details"] + '</div>';
        string += '  <div class="quantity">Quantity';
        string += getSelect(product["item"], product["quantity"]);
        string += '  </div>';
        string += '  <button class="btn btn-success" value=' + i +   '>Add to Cart</button>';
        string += '</div>';       
        
        $('#products').append(string);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
     });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var product = products[i]
            var count = product["count"];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += product["item"];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

    // Get selection
    function getSelect(name, quantity) {
        var string = "";

        string += '<select id="' + name + '"">'

        for(var i = 1; i <= quantity; i++) {
            string += '<option value=' + i + '>' + i + '</option>';
        }

        string += '</select>';

        return string;
    }


});