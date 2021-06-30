import mockApi from '../MockApi';

class MenuDataManager {
	constructor() {
		this._menuData = [];
	}

	async getMenuData() {
		this._menuData = await mockApi.getMenu();
	}

	returnMenuData() {
		return this._menuData;
	}
}

const menuDataManager = new MenuDataManager();

export default menuDataManager;
