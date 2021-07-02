import menuDataManager from '../dataManagers/MenuDataManager';
import validation from '../helpers/Validation';

import { showMenuScreen, showAddCategoryModal, renderMenuCategory } from '../views/menuView';

import { hideElements, showElement, checkErrors } from '../views/commonView';

import { initModalFormListener } from '../hendlers/menuHandlers';

import { initCloseBtnListener, closeModal } from '../hendlers/commonHanders';

import { CATEGORY_EL_CLASS, ADD_CATEGORY_FORM_ID } from '../helpers/configs';

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
	hideElements(CATEGORY_EL_CLASS);

	const categoryEl = eventTarget.closest(CATEGORY_EL_CLASS);
	showElement(categoryEl);
}

export function initCategoryAdding() {
	showAddCategoryModal();

	initCloseBtnListener();

	initModalFormListener(ADD_CATEGORY_FORM_ID);
}

export function onAddCategoryFormSubmit(e) {
	e.preventDefault();

	const formData = new FormData(this);

	for (let enrty of formData.entries()) {
		addCategory(enrty);
	}
}

function addCategory(entry) {
	const [key, value] = entry;
	const inputErrors = validation.validate(entry);

	const errorsPresent = checkErrors(inputErrors);

	if (!errorsPresent) {
		menuDataManager.setCategory(value);

		renderMenuCategory(value);

		closeModal();
	}
}
