import mockApi from '../MockApi';

class MenuDataManager {
	constructor() {
		this._menuData = {};
		this._menuCategories = [];
	}

	// categories
	async setMenuCategories() {
		this._menuCategories = await mockApi.getCategoriesData();
	}

	setMenuCategory(category) {
		this._menuCategories.push(category);
		this._menuData[category.id] = [];
	}

	deleteMenuCategory(categoryToDeleteId) {
		this._menuCategories = this._menuCategories.filter((category) => category.id !== categoryToDeleteId);

		mockApi.deleteCategoryData(categoryToDeleteId);
	}

	returnMenuCategories() {
		return this._menuCategories;
	}

	// dishes
	async getMenuCategoryDishes(categoryId) {
		this._menuData[categoryId] = await mockApi.getCategoryDishesData(categoryId);
	}

	addMenuDish(dish, categoryId) {
		console.log(this._menuData);
		this._menuData[categoryId] = dish;
		console.log(this._menuData);
	}

	returnLoadedMenuData() {
		return this._menuData;
	}
}

const menuDataManager = new MenuDataManager();

export default menuDataManager;
