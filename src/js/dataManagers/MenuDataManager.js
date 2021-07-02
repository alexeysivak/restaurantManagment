import mockApi from '../MockApi';

class MenuDataManager {
	constructor() {
		this._menuData = [];
		this._menuCategories = [];
	}

	async getMenuData() {
		this._menuData = await mockApi.getMenu();
	}

	returnMenuData() {
		return this._menuData;
	}

	setCategory(cateory) {
		this._menuCategories.push(cateory);
	}

	getCategories() {
		return this._menuCategories;
	}

	addDish(dish) {
		this._menuData.push(dish);
	}
}

const menuDataManager = new MenuDataManager();

export default menuDataManager;
