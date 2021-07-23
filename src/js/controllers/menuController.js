import menuDataManager from '../dataManagers/MenuDataManager';
import validation from '../helpers/Validation';
import eventTargetDefiner from '../helpers/eventTargetDefiner';
import {
	showMenuScreen,
	renderMenuCategories,
	showAddDishModal,
	renderMenuCategory,
	renderCategoryDishes,
	renderDish,
} from '../views/menuView';

import {
	hideElements,
	showElement,
	removeElement,
	deleteErrorEls,
	displayErrors,
	showConfirmationModal,
	closeModalPopup,
} from '../views/commonView';

import { initMenuListener, initModalFormListener } from '../hendlers/menuHandlers';

import { initCloseBtnListener } from '../hendlers/commonHanders';

import { CATEGORY_EL_SELECTOR, ADD_DISH_FORM_ID } from '../helpers/configs';
import mockApi from '../MockApi';

const menuCategoryEl = document.getElementById('menuCategoryEl');

export function initMenu() {
	menuCategoryEl.addEventListener('click', onMenuCategoryElClick);
}

async function onMenuCategoryElClick() {
	showMenuScreen();

	const categoryData = await prepareCategoryData();

	renderMenuCategories(categoryData);
	initMenuListener();
}

export async function prepareCategoryData() {
	let categoryData = menuDataManager.returnMenuCategories();

	if (!categoryData[0]) {
		await menuDataManager.setMenuCategories();
		categoryData = menuDataManager.returnMenuCategories();
	}

	return categoryData;
}

export function activateCollapse(eventTarget) {
	hideElements(CATEGORY_EL_SELECTOR);

	const categoryEl = eventTarget.closest(CATEGORY_EL_SELECTOR);
	showElement(categoryEl);
}

export async function showCategoryDishes(categoryId) {
	const categoryDishes = await prepareCategoryDishesData(categoryId);

	const categoryEl = document.querySelector(`[data-id="${categoryId}"] .category__dishes`);

	if (!categoryEl.children[0]) {
		renderCategoryDishes(categoryDishes, categoryId);
	}
}

async function prepareCategoryDishesData(categoryId) {
	let menu = menuDataManager.returnLoadedMenuData();

	if (!menu[categoryId]) {
		await menuDataManager.getMenuCategoryDishes(categoryId);
		menu = menuDataManager.returnLoadedMenuData();
	}

	return menu[categoryId];
}

export function initCategoryAdding() {
	showAddDishModal();

	initCloseBtnListener();

	initModalFormListener(ADD_DISH_FORM_ID);
}

export function onAddDishFormSubmit(e) {
	e.preventDefault();

	const formData = new FormData(this);

	validation.validate(formData);

	if (!manageErrors(validation.getErrors())) {
		addDish(formData);
	}
}

function manageErrors(inputErrors) {
	deleteErrorEls();

	if (Object.getOwnPropertyNames(inputErrors)[0]) {
		displayErrors(inputErrors);

		return true;
	}
}

async function addDish(formData) {
	let dish = {};
	for (let [key, value] of formData) {
		dish[key] = value;
	}

	let neededCategory = {};
	if (checkCategory(dish.type)) {
		neededCategory = await getDishCategory(dish.type);
		renderMenuCategory(neededCategory);
	} else {
		neededCategory = await getDishCategory(dish.type);
	}

	const newDish = await mockApi.addDish(dish, neededCategory.id);

	menuDataManager.addMenuDish(newDish, neededCategory.id);

	renderDish(newDish, neededCategory.id);

	closeModalPopup();
}

async function getDishCategory(categoryName) {
	let neededCategory = filterCategories(categoryName);

	if (!neededCategory[0]) {
		neededCategory.push(await addCategory(categoryName));
	}

	return neededCategory[0];
}

function checkCategory(categoryName) {
	const neededCategory = filterCategories(categoryName);

	if (neededCategory[0]) {
		return false;
	}

	return true;
}

function filterCategories(categoryName) {
	const categories = menuDataManager.returnMenuCategories();

	let neededCategory = categories.filter((category) => category.name === categoryName);

	return neededCategory;
}

async function addCategory(categoryName) {
	const newCategory = await mockApi.addCategoryData(categoryName);

	menuDataManager.setMenuCategory(newCategory);

	return newCategory;
}

export function onDeleteCategoryBtnClick(categoryToDelete) {
	showConfirmationModal();

	const confirmationModal = document.getElementById('confirmationModal');

	confirmationModal.addEventListener('click', (e) => {
		if (eventTargetDefiner.isConfirmDelitionBtnEl(e.target)) {
			deleteCategory(categoryToDelete);
			closeModalPopup();
		}
		if (eventTargetDefiner.isConfirmCencelBtnEl(e.target)) {
			closeModalPopup();
		}
	});
}

function deleteCategory(categoryToDelete) {
	removeElement(categoryToDelete);

	menuDataManager.deleteMenuCategory(categoryToDelete.dataset.id);
}
