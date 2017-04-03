// currency object

// Include data validation

var currencies = {
    "USD": {"symbol": "$", "name": "US Dollar(s)", "rate": 1},
    "GBP": {"symbol": "£", "name": "British Pound Sterling", "rate": 0.79593},
    "JPY": {"symbol": "¥", "name": "Yen", "rate": 110.773},
    "EUR": {"symbol": "€", "name": "Euro(s)", "rate": 0.92029},
    "AUD": {"symbol": "AU$", "name": "Australian Dollars", "rate": 1.31069},
    "CAD": {"symbol": "CA$", "name": "Canadian Dollars", "rate": 1.33838}
}


/*
    USD is essentially the base rate
    Final Amount is a proportion of (Currency 1 / Currency 2) = (Currency 1 Rate / Currency Rate 2). Solve for currency 2.
*/
var converter = function () {
    var amountFrom = parseFloat($('#amount').val()); // parse as a float to get change assuming the currency supports it
    var rateFrom = $('#rateFrom').val(); // get user input for original currency
    var rateTo = $('#rateTo').val(); // get user input for target currency
    var amountTo = ((amountFrom * currencies[rateTo].rate) / currencies[rateFrom].rate).toFixed(2); // Calculate the target currency. Access currencies object and use the user input for currencies to select the correct rates
    amountTo = commaSeparateNumber(amountTo);
    return $('#convertedAmount').html(currencies[rateTo].symbol + " " + amountTo); // Access symbols of the currencies. Insert final currency amount and round it to two decimals places.
};

// anonymous function that triggers on load
(function() {
    var currencyCodes = Object.keys(currencies); // list all currencies object keys within the object
    for(var i = 0; i < currencyCodes.length; i++) { // populate currencies in the dropdown menus
        $('#rateFrom, #rateTo').append('<option value="' + currencyCodes[i] + '">' + currencyCodes[i] + '</option>');
    }
})();

$('#convert').click(converter); // bind the converter function to the submit button


function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){ // convert item to string. Find a digit with three digits following. \d means digit. \d{3} means a sequence of three digits.
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2'); // replace digit with three following digits with capture groups
    }
    return val; // return a string with thousands comma delimeter
}