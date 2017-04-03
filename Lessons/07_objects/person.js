var Shopper = function(name, budget) {
    console.log("We created a new Shopper: " + name);
    this.name = name;
    this.budget = budget;
    this.total = 0;
    this.cart = [];
    this.addItem = function(Item) {
        this.cart.push(Item);
        this.total += (Item.price * Item.quantity);
    }

    this.removeItem = function(name, quantity) {
        for (var i = 0; i < this.cart.length; i++)
        {
            var cart_item = this.cart[i];
            if(cart_item["name"] === name) {
                cart_item["quantity"] -= quantity;
                this.total -= (quantity * cart_item["price"]);
            }
        }
    }
    this.checkOut = function(total) {


        if (this.budget < this.total) {
            console.log("You broke. You should put something back.");
        } else {
            this.budget -= this.total;
            this.cart = [];
            console.log(this.name + " total is: $" + this.total + ". " + this.name + " has $" + this.budget + " left over.")
        }
    }
}

var Item = function(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

var shopper = new Shopper("Rachel", 5);
shopper.addItem(new Item("Carrots", 10, .50));
shopper.addItem(new Item("Chips",1,4.99));
shopper.addItem(new Item("Apples",5,1));

shopper.removeItem("Carrots",2);
console.log(shopper.cart);
shopper.checkOut();


