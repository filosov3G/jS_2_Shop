
// const goods = [
//   { title: 'Shirt', color: 'black', size: 23, brand: 'Nike', price: 150 },
//   { title: 'Socks', color: 'black', size: 23, brand: 'Nike', price: 50 },
//   { title: 'Jacket', color: 'black', size: 23, brand: 'Nike', price: 350 },
//   { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
//   { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
//   { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
// ];

// const renderGoodsItem = (title = 'Title', price = 0, color = 'Color', size = 0, brand = 'Brand') => (`<div class="goods-item"><h3>${title}</h3>
// 	<div><span class="brand-title span">Brand:</span><p class="brand">${brand}</p>
// 	</div><div><span class="color-size-title span">Color/Size:</span><p class="color">${color}</p><p class="size">${size}</p></div>
// 	<div><span class="price-title span">Price:</span><p class="price">${price}</p></div></div>`
// ); // Наверное лучше для добавления HTML разметки и классов написать отдельную функцию. Дабы избежать нагромождения и ошибок. Пока оставлю так

// const renderGoodsList = (list = []) => {
//   let goodsList = document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price, item.color, item.size, item.brand)).join('');
// }

// renderGoodsList(goods);

// console.log(goods);

// class MenuItem {
// 	constructor(color, name) {
// 		this.color = color;
// 		this.name = name;
// 	}

// 	makeRed() {
// 		this.color = 'red';
// 	}
// }

// class MainMenuItem extends MenuItem {
// 	constructor(color, name, width) {
// 		super(color, name)
// 		this.width = width;
// 	}

// 	makeBlue() {
// 		this.color = 'blue';
// 	}
// }

// const mainMenuItem = new MainMenuItem('white', 'Foo', 200);

// console.log(mainMenuItem);
// mainMenuItem.makeRed();
// console.log(mainMenuItem);
// mainMenuItem.makeBlue();
// console.log(mainMenuItem);

// const menuItem = new MenuItem('green', 'Contacts');
// console.log(menuItem);

// menuItem.makeRed();
// console.log(menuItem);

class GoodsItem {
	constructor(title, color, size, brand, price) {
		this.title = title;
		this.color = color;
		this.size = size;
		this.brand = brand;
		this.price = price;
	}
	render() {
		return `<div class="goods-item"><h3>${this.title}</h3>
	<div><span class="brand-title span">Brand:</span><p class="brand">${this.brand}</p>
	</div><div><span class="color-size-title span">Color/Size:</span><p class="color">${this.color}</p><p class="size">${this.size}</p></div>
	<div><span class="price-title span">Price:</span><p class="price">${this.price}</p></div></div>`;
	}

}

class GoodsList {
	constructor() {
		this.goods = [];
	}
	fetchGoods() {
		this.goods = [
			{ title: 'Shirt', color: 'black', size: 23, brand: 'Nike', price: 150 },
			{ title: 'Socks', color: 'black', size: 23, brand: 'Nike', price: 50 },
			{ title: 'Jacket', color: 'black', size: 23, brand: 'Nike', price: 350 },
			{ title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
			{ title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
			{ title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
		];
	}
	render() {
		let listHtml = '';
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.title, good.color, good.size, good.brand, good.price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
	}
	goodsTotalPrice() {
		let totalPrice = this.goods.reduce((sum, current) => {
			return sum + current.price;
		}, 0);

		console.log(totalPrice);

	}
}
class GoodsBasket {
	constructor() {
		this.goodsBasket = [];
	}
	fetchGoods() {
		totalPrice.goodsBasket = [];
	}
	render() {

	}
	deleteBasketItem() {

	}
	clearBasket() {

	}
	goodsBasketTotalPrice() {
		let basketTotalPrice = this.goodsBasket.reduce((sum, current) => {
			return sum + current.price;
		}, 0);

		console.log(basketTotalPrice);

	}

}
class GoodsBasketItem extends GoodsItem {
	constructor(title, price, count) {
		super(title, price)
		this.count = count;
	}
	render() {

	}
	increaseQuantity() {

	}
	reduceQuantity() {

	}

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.goodsTotalPrice();


// Задание №3:

const topping = [{ title: 'cheese', price: 10, callories: 20 },
{ title: 'potatoes', price: 15, callories: 10 },
{ title: 'salad', price: 20, callories: 5 },
{ title: 'spices', price: 15, callories: 0 },
{ title: 'mayonnaise', price: 20, callories: 5 },
];
const hamburgers = [{ size: 'Big', price: 150, callories: 200, stuffing: [] }, { size: 'Small', price: 100, callories: 150, stuffing: [] },];
class Topping {
	constructor(title, price, callories) {
		this.title = title;
		this.price = price;
		this.callories = callories;
	}
	render() {
		return `${this.title}: P=${this.price}r. K=${this.callories};`;
	}
}
// class HamburgerVersion extends Topping {
// 	constructor(title, price, callories, size) {
// 		super(title, price, callories)
// 		this.size = size;
// 	}
// 	render() {
// 		return `${this.size}`;
// 	}
// }

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = [];
	}
	fetchTopping() {
		topping = [{ title: 'cheese', price: 10, callories: 20 },
		{ title: 'potatoes', price: 15, callories: 10 },
		{ title: 'salad', price: 20, callories: 5 },
		{ title: 'spices', price: 15, callories: 0 },
		{ title: 'mayonnaise', price: 20, callories: 5 },
		];
	}
	fetchHamburger() {
		hamburgers = [{ size: 'Big', price: 150, callories: 200, stuffing: '' }, { size: 'Small', price: 100, callories: 150, stuffing: '' },];
	}

	addTopping(topping) {



	}   // Добавить добавку }
	removeTopping(topping) { }// Убрать добавку }
	getToppings(topping) {
		let listTopping = '';
		topping.forEach((topping) => {
			const toppings = new Topping(topping.title, topping.price, topping.callories);
			listTopping += toppings.render() + ' ';

		});
		console.log(listTopping);


	} // Получить список добавок }
	getSize() {
		// let listSize = '';
		// hamburgers.forEach((hamburger) => {
		// 	const size = new HamburgerVersion(hamburger.size, hamburger.price, hamburger.callories, hamburger.size);
		// 	listSize += size.render() + ' ';

		// });




		// console.log(listSize);


	}            // Узнать размер гамбургера }
	getStuffing() { }         // Узнать начинку гамбургера }
	calculatePrice() { }      // Узнать цену }
	calculateCalories() { }   // Узнать калорийность }


}
const toppingList = new Hamburger();
toppingList.getToppings(topping);
// toppingList.getSize();
// console.log(toppingList.size);