angular
    .module('app', [])
    .controller('StoreController', function($scope, ProductFactory, CartFactory) {
        $scope.page = "Store";
        $scope.products = ProductFactory.products;
        $scope.addToCart = CartFactory.addCart;
    })

    .controller('CartController', function($scope, ProductFactory, CartFactory) {
        $scope.page = "Cart";
        $scope.cart = CartFactory.cart;
        $scope.total = CartFactory.totalCart;
        $scope.removeCart = CartFactory.removeCart;
    })

    .controller('InventoryController', function($scope, ProductFactory, CartFactory) {
        $scope.products = ProductFactory.products;
    })

    .factory('ProductFactory', function() {
        var ProductFactory = this;
        ProductFactory.products = [
            {"item": "Apples", "qty": { "inventory":10, "cart":0 }, "price": 1.00, "description": "Keep the doctor away!" },
            {"item": "Oranges", "qty": { "inventory":20, "cart":0 },"price": 2.50, "description": "Perfect for Vitamin C" },
            {"item": "Bananas", "qty": { "inventory":5, "cart":0 }, "price": 3.00, "description": "Bananas are the BEST!" },
            {"item": "Grapes", "qty": { "inventory":30, "cart":0 }, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ];
        return ProductFactory;
    })

    .factory('CartFactory', function() {
        var CartFactory = this;
        CartFactory.cart = [];

        CartFactory.addCart = function(product) {
            var index = CartFactory.cart.indexOf(product);
            if(index < 0) {
                product["qty"]["inventory"]--;
                product["qty"]["cart"]++;
                CartFactory.cart.push(product);
            } else {
                product.qty.inventory--;
                product.qty.cart++;
                
            }
            // Set subtotal
            product["subtotal"] = product.qty.cart * product.price;
            
        }

        CartFactory.removeCart = function(product) {
            var index = CartFactory.cart.indexOf(product);
            product.qty.inventory++;
            product.qty.cart--;
            product["subtotal"] = product.qty.cart * product.price;
        }

        CartFactory.totalCart = function() {
            var total = 0;
            for(var i = 0; i < CartFactory.cart.length; i++) {
                total += CartFactory.cart[i]["subtotal"];
            }
            return total;
        }
        
        
        return CartFactory;
    })