import menuDataManager from '../dataManagers/MenuDataManager';

import { prepareMenuData } from '../controllers/menuController';

import { renderScreenModal, renderElement } from './commonView';

import { initMenuListener } from '../hendlers/menuHandlers';

import {
	menuScreenTemplate,
	getMenuCategoryTemplate,
	getDishTemplate,
	addCategoryModalTemplate,
} from '../helpers/templates';

export async function showMenuScreen() {
	renderScreenModal(menuScreenTemplate);

	const menuData = await prepareMenuData();

	renderMenuData(menuData);

	initMenuListener();
}

function renderMenuData(menuData) {
	renderMenuCategories(menuData);

	renderDishes(menuData);
}

function renderMenuCategories() {
	const menuCategories = menuDataManager.getCategories();

	menuCategories.forEach((categoryName) => renderMenuCategory(categoryName));
}

export function renderMenuCategory(categoryName) {
	const menuContainer = document.getElementById('menuContainer');

	renderElement(getMenuCategoryTemplate(categoryName), menuContainer);
}

function renderDishes(menuData) {
	let categoryEl = null;

	menuData.forEach((dish) => {
		if (!categoryEl || categoryEl.dataset.id !== dish.type) {
			categoryEl = document.querySelector(`[data-id=${dish.type}]`);
		}

		renderElement(getDishTemplate(dish), categoryEl);
	});
}

export function showAddCategoryModal() {
	const modalScreen = document.getElementById('modalScreen');
	modalScreen.insertAdjacentHTML('afterbegin', addCategoryModalTemplate);
}
