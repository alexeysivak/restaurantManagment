import { showMenuScreen } from '../views/menuView';


const menuCategoryEl = document.getElementById('menuCategoryEl');

export function initMenu() {
	menuCategoryEl.addEventListener('click', showMenuScreen);
}
