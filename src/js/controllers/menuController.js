import menuDataManager from '../dataManagers/MenuDataManager';
import validation from '../helpers/Validation';
import eventTargetDefiner from '../helpers/eventTargetDefiner';
import { showMenuScreen, showAddDishModal, renderMenuCategory, renderDish } from '../views/menuView';

import {
	hideElements,
	showElement,
	removeElement,
	deleteErrorEls,
	displayErrors,
	showConfirmationModal,
	closeModalPopup,
} from '../views/commonView';

import { initModalFormListener } from '../hendlers/menuHandlers';

import { initCloseBtnListener } from '../hendlers/commonHanders';

import { CATEGORY_EL_SELECTOR, ADD_DISH_FORM_ID } from '../helpers/configs';
import mockApi from '../MockApi';

const menuCategoryEl = document.getElementById('menuCategoryEl');

export function initMenu() {
	menuCategoryEl.addEventListener('click', showMenuScreen);
}

export async function prepareMenuData() {
	let menuData = menuDataManager.returnMenuData();

	if (!menuData[0]) {
		await menuDataManager.getMenuData();
		menuData = menuDataManager.returnMenuData();
	}

	setMenuCategories(menuData);

	return menuData;
}

function setMenuCategories(menuData) {
	menuData.forEach((item) => {
		const menuCategories = menuDataManager.getCategories();

		if (!menuCategories.includes(item.type)) {
			menuDataManager.setCategory(item.type);
		}
	});
}

export function activateCollapse(eventTarget) {
	hideElements(CATEGORY_EL_SELECTOR);

	const categoryEl = eventTarget.closest(CATEGORY_EL_SELECTOR);
	showElement(categoryEl);
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

	const newDish = await mockApi.addDish(dish);

	menuDataManager.addDish(newDish);

	checkDishCategory(newDish.type);

	renderDish(newDish);

	closeModalPopup();
}

function checkDishCategory(category) {
	const categories = menuDataManager.getCategories();
	if (!categories.includes(category)) {
		menuDataManager.setCategory(category);
		renderMenuCategory(category);
	}
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
	const categoryElToDelete = categoryToDelete.closest(CATEGORY_EL_SELECTOR);
	const categoryToDeleteType = categoryToDelete.parentElement.nextElementSibling.dataset.id;

	removeElement(categoryElToDelete);

	deleteCategoryData(categoryToDeleteType);
}

function deleteCategoryData(categoryToDeleteType) {
	const dishesToDelete = menuDataManager.getCategoryDishes(categoryToDeleteType);

	dishesToDelete.forEach((dish) => mockApi.deleteDish(dish.id));

	menuDataManager.deleteCategory(categoryToDeleteType);
}
