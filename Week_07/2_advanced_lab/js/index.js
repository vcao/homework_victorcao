angular
    .module('app', [])
    .controller('StoreController', function() {
        this.products = [
            {"item": "Apples", "qty": { "inventory":10, "cart":0 }, "price": 1, "description": "Keep the doctor away!" },
            {"item": "Oranges", "qty": { "inventory":20, "cart":0 }, "description": "Perfect for Vitamin C" },
            {"item": "Bananas", "qty": { "inventory":5, "cart":0 }, "description": "Bananas are the BEST!" },
            {"item": "Grapes", "qty": { "inventory":30, "cart":0 }, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ];

        this.cart = [];

        
        this.addCart = function(product) {
            var index = this.cart.indexOf(product);
            if(index < 0) {
                product["qty"]["inventory"]--;
                product["qty"]["cart"]++;
                this.cart.push(product);
            } else {
                product.qty.inventory--;
                product.qty.cart++;
            }
        };

        this.removeCart = function(product) {
            var index = this.cart.indexOf(product);
            product.qty.inventory++;
            product.qty.cart--;
        }
    });