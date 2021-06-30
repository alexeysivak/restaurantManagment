const menu = [
	// { name: 'Omelet of the Day', consist: 'inquire with your server', price: '12', type: 'brunch' },
	// {
	// 	name: 'Corned Beef Hash',
	// 	consist: 'fried egg, rosemary garlick new popatoes, corned beef brisket',
	// 	price: '12',
	// 	type: 'Brunch',
	// },
	//  {
	// 	name: 'Chakshuka',
	// 	consist: 'farm egg served over-easy in tomato-chilli sauceoregano, feta, served with flatbread + home fries',
	// 	price: '12',
	// 	type: 'Brunch',
	// },
	// {
	// 	name: 'Coppersmith Egg Sandwich',
	// 	consist: 'egg and VT cheddar on local english muffinbacon, avocado + home fries',
	// 	price: '10',
	// 	type: 'Brunch',
	// },
	//--------------------------------------------------------
	// {
	// 	name: 'Don Juan',
	// 	consist: 'plaintains, rice, rojo, cheesy eggs, refritos, grilled tortilla',
	// 	price: '12',
	// 	type: 'Brunch',
	// },
	// {
	// 	name: 'Steak n Eggs',
	// 	consist:
	// 		'chicken-fried sirloin, rosemary garlic new potato, fried egg, Texas toast, white peppercorn gravy, tomato',
	// 	price: '18',
	// 	type: 'Brunch',
	// },
	// {
	// 	name: 'Chicken + Waffles',
	// 	consist: 'cheddar corn waffle, strawberry butter, maple',
	// 	price: '15',
	// 	type: 'Brunch',
	// },
	// {
	// 	name: 'Smocked Chicken Gumbo',
	// 	consist: 'cornbread croutons, scallions',
	// 	price: '7.5',
	// 	type: 'Bowls',
	// },
	// {
	// 	name: 'Wedge',
	// 	consist: 'bacon, tomato, blue cheese, cucumber',
	// 	price: '15',
	// 	type: 'Bowls',
	// },
	// {
	// 	name: 'Burrito',
	// 	consist: 'tortilla, rice and beans, romaine, pico de gallo, cotija',
	// 	price: '11',
	// 	type: 'Bowls',
	// },
	// {
	// 	name: 'Apple Cider Donut Holes',
	// 	consist: 'mulled apple cider shooter',
	// 	price: '8',
	// 	type: 'Appetizer',
	// },
	// {
	// 	name: 'Brunch Wings',
	// 	consist: 'buttermilk fried boneless wings, bacon & vidalia jamscallions',
	// 	price: '13',
	// 	type: 'Appetizer',
	// },
	// {
	// 	name: 'Hangover Tots',
	// 	consist: 'chorizo seco, marjoram, white peppercorn gravy',
	// 	price: '9',
	// 	type: 'Appetizer',
	// },
	// {
	// 	name: 'Banana Fluffernutter Flitters',
	// 	consist: 'peanuts, fluff crema',
	// 	price: '8',
	// 	type: 'Appetizer',
	// },
	// {
	// 	name: 'Short Rib Eggrolls',
	// 	consist: 'pepper jack, spicy aioli',
	// 	price: '12',
	// 	type: 'Appetizer',
	// },
	// {
	// 	name: 'Monte Cristo',
	// 	consist: 'ham, french toast, swiss, maple syrup',
	// 	price: '7',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Crispy Turkey BLT',
	// 	consist: 'cranberry mayo/fried turkey tenders',
	// 	price: '9',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Chicken Biscuit',
	// 	consist: 'buttermilk biscuit, peppercorn gravy',
	// 	price: '7.5',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Short Rib Grilled Cheese',
	// 	consist: 'carmelized onoin, vt cheddar',
	// 	price: '7',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Double Stacker',
	// 	consist: 'pepper jack, bacon, avocado, fried egg, green chile aioli',
	// 	price: '8',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Hummus and Falafel Wrap',
	// 	consist: 'red papper hummus, spinach, tomato',
	// 	price: '7.5',
	// 	type: 'Sandwiches',
	// },
	// {
	// 	name: 'Blue Fire Coffee',
	// 	price: '2.5',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Espresso',
	// 	price: '2.5',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Capuccino',
	// 	price: '3',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Latte',
	// 	price: '3',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Mocha',
	// 	price: '3.5',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Affogato',
	// 	price: '3.5',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Cold Brew',
	// 	price: '2.7',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Loose Leaf Tea',
	// 	price: '2',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Green Tea',
	// 	price: '1.5',
	// 	type: 'cafe',
	// },
	// {
	// 	name: 'Broadway Blues',
	// 	consist: 'banana, soy, blueberry peanut butter, chocolate',
	// 	price: '7',
	// 	type: 'Smoothies',
	// },
	// {
	// 	name: 'Green Goddess',
	// 	consist: 'kale, avocado, strawberries, apple juice',
	// 	price: '7',
	// 	type: 'Smoothies',
	// },
	// {
	// 	name: 'Mango Madness',
	// 	consist: 'pineaple juice, yogurt, mango',
	// 	price: '7',
	// 	type: 'Smoothies',
	// },
	// {
	// 	name: 'Strawberries in Southie',
	// 	consist: 'strawberries, banana, apple juice',
	// 	price: '7',
	// 	type: 'Smoothies',
	// },
	// {
	// 	name: 'Coppersmith Colada',
	// 	consist: 'pineaple, cocunut cream',
	// 	price: '7',
	// 	type: 'Smoothies',
	// },
];

// function setMenu() {
// 	menu.forEach((dish) => {
// 		fetch('https://60d6032d943aa60017768d88.mockapi.io/menu', {
// 			method: 'POST',
// 			body: JSON.stringify(dish),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 	});
// }

export function init() {
	//setMenu();
}
