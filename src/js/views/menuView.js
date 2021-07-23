import { renderScreenModal, renderElement } from './commonView';

import {
	menuScreenTemplate,
	getMenuCategoryTemplate,
	getDishTemplate,
	addDishModalTemplate,
} from '../helpers/templates';

export async function showMenuScreen() {
	renderScreenModal(menuScreenTemplate);
}

export function renderMenuCategories(categoryData) {
	categoryData.forEach((category) => renderMenuCategory(category));
}

export function renderMenuCategory(category) {
	const menuContainer = document.getElementById('menuContainer');

	renderElement(getMenuCategoryTemplate(category), menuContainer);
}

export function renderCategoryDishes(categoryDishes, categoryId) {
	const categoryEl = document.querySelector(`[data-id="${categoryId}"] .category__dishes`);

	categoryDishes.forEach((dish) => renderElement(getDishTemplate(dish), categoryEl));
}

export function renderDish(newDish, categoryId) {
	const categoryEl = document.querySelector(`[data-id="${categoryId}"] .category__dishes`);

	renderElement(getDishTemplate(newDish), categoryEl);
}

export function showAddDishModal() {
	const modalScreen = document.getElementById('modalScreen');
	modalScreen.insertAdjacentHTML('afterbegin', addDishModalTemplate);
}
