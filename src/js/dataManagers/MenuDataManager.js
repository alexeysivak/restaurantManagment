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

	getCategoryDishes(categoryToDeleteType) {
		return this._menuData.filter((dish) => dish.type == categoryToDeleteType);
	}

	deleteCategory(categoryToDeleteType) {
		this._menuData = this._menuData.filter((dish) => dish.type !== categoryToDeleteType);

		this._menuCategories = this._menuCategories.filter((type) => type !== categoryToDeleteType);
	}
}

const menuDataManager = new MenuDataManager();

export default menuDataManager;
