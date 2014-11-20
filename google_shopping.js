//# Google Shopping Lab
// ## Conditionals and Loops

// Answering the following questions on google_shopping.md. Use the file google_shopping.js to check your output.

// Use the product search result in your file to check the following:

// 1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. 
//How many are there? Where else is this count information stored in the search results?
// 	var data = require("./products.json")


// // Write your solutions below
// //console.log(data.items.length); // to check how many items there are in our array
	
	var newArray = [];
// we want to push all items to our new array that have a key of kind and a value of shopping#products
	for (var i = 0; i < data.items.length; i+=1) {
		if (data.items[i].kind = "shopping#product") { 
			newArray.push(data.items[i]);
		}
	}
	console.log(newArray.length);
// there are 25 kinds, and this information is also stored in the keys itemsPerPage and currentItemCount

// 2.) Find all items with a `backorder` availability in `inventories`.
var data = require("./products.json")
var backorderCount = [];
	for (var i = 0; i < data.items.length; i+=1) {
			if (data.items[i].product.inventories[0].availability === "backorder") {
				backorderCount.push(data.items[i].product.title);
			}
	}
console.log("There are " + backorderCount.length + " backordered. " + backorderCount);

// we created a new variable that holds an array
//the array stores data with the string "backorder" from the availability key in our data.
// for loop creates a counter of items within data, calls the product, inventories and availabilty keys with a string that 
//is equal to "backorder".
//we then push the backordered items product and title to our new array. 

// 3.) Find all items with more than one image link.
var data = require("./products.json")
var multipleImageItems = [];
	for (var i = 0; i < data.items.length; i+=1) {
			if (data.items[i].product.images.length > 1) {
				multipleImageItems.push([data.items[i].product.googleId, data.items[i].product.images.length]);
			}
	}
	console.log(multipleImageItems);
// we used part of same for loop to determine the length of the data we want to filter
//we made an if statement that called up items with images that had an array with more than 1 result
// we pushed that data to our new empty array, with the googleID to identify the specific product with
// multiple images.

// 4.) Find all `canon` products in the items (careful with case sensitivity).
var data = require("./products.json")
var brand = [];
	for (var i = 0; i < data.items.length; i+=1) {
			if (data.items[i].product.brand.toLowerCase() === "canon" ) {
				brand.push([data.items[i].product.googleId, data.items[i].product.brand]);
			}
	}
	console.log(brand);
// we kept our baisc for loop and changed the if statement to call product and brand, then called the method .toLowerCase 
// to take care of capitalization or data entry errors by brand. then we pushed to our array that we renamed
// and we printed to console

// 5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".
var data = require("./products.json")
var authorBrand = [];
	for (var i = 0; i < data.items.length; i+=1) {
			if (data.items[i].product.brand.toLowerCase() === "canon" && data.items[i].product.author.name.toLowerCase() === "ebay") {
				authorBrand.push([data.items[i].product.googleId, data.items[i].product.brand, data.items[i].product.author.name]);
			}
	}
	console.log(authorBrand);

// 6.) Print all the products with their **brand**, **price**, and a **image link**

var data = require("./products.json")
var snapshot = [];
	for (var i = 0; i < data.items.length; i+=1) {
			if (data.items[i].product.brand, data.items[i].product.inventories[0].price, data.items[i].product.images[0]) {
				snapshot.push([data.items[i].product.googleId, data.items[i].product.brand, data.items[i].product.inventories[0].price]);
			}
	}
	console.log(snapshot);
	// instead of printing the images to the display I kept the google ID to make it more readable.


