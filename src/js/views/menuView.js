import menuDataManager from '../dataManagers/MenuDataManager';

import { renderScreenModal, renderEl } from './commonView';

import { initMenuListener } from '../hendlers/menuHandlers';
import { initCloseBtnListener } from '../hendlers/commonHanders';

import { menuScreenTemplate, getMenuCategoryTemplate, getDishTemplate } from '../helpers/templates';

export function showMenuScreen() {
	renderScreenModal(menuScreenTemplate);

	renderMenuData();

	initMenuListener();

	initCloseBtnListener();
}

async function renderMenuData() {
	await menuDataManager.getMenuData();

	const menuData = menuDataManager.returnMenuData();

	renderMenuCategories(menuData);

	renderDishes(menuData);
}

function renderMenuCategories(menuData) {
	const menuCategories = [];

	menuData.forEach((item) => {
		if (!menuCategories.includes(item.type)) {
			menuCategories.push(item.type);
		}
	});

	const menuContainer = document.getElementById('menuContainer');

	menuCategories.forEach((categoryName) => renderEl(getMenuCategoryTemplate(categoryName), menuContainer));
}

function renderDishes(menuData) {
	let categoryEl = null;

	menuData.forEach((dish) => {
		if (!categoryEl || categoryEl.dataset.id !== dish.type) {
			categoryEl = document.querySelector(`[data-id=${dish.type}]`);
		}

		renderEl(getDishTemplate(dish), categoryEl);
	});
}
