console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Create a global variable named basket and set it to an empty array.
// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added

let basket = [];

function addItem(item) {
    basket.push (item);
    return true;
}

addItem ('Apple');
addItem ('Banana');
addItem ('Orange');
addItem ('Pear');

console.log('Basket is:', basket);
console.log('Basket is:', addItem());

// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line

function listItems() {
    for (let i=0; i<basket.length; i++) {
        return basket.length - 1;
    }
}

console.log('List of Items:', listItems());

console.log('Item 1:', basket[0]);
console.log('Item 2:', basket[1]);
console.log('Item 3:', basket[2]);
console.log('Item 4:', basket[3]);

// Create a function called empty. It should:
// reset the basket to an empty array

function empty () {
    basket.pop();
    return basket;
}

empty ('Apple');
empty ('Banana');
empty ('Orange');
empty ('Pear');

console.log ('Basket is now:', empty ())

// Using functions in other functions!
// Add a global const named maxItems and set it to 5.

const maxItems = 5;

// Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)

function isFull () {
    if (basket < maxItems) {
        return false;
    }
    else (basket >= maxItems)
        return true;
}

console.log ('Basket is:', isFull ());

// Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false
// Using Array built-in functions!

// function isFull () {
//     for (let i = 0; i<basket.length; i++) {
//         return true;
//     }
//     else (i > basket.length)
//         return false;
// }

// console.log ('isFull basket:', isFull () )




// Create a function called removeItem. It should:
// Take an input parameter for a string item
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found
