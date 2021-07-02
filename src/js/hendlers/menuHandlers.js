import { hideElement } from '../views/commonView';

import { initCategoryAdding, activateCollapse, onAddDishFormSubmit } from '../controllers/menuController';

import { initCloseBtnListener } from './commonHanders';

import eventTargetDefiner from '../helpers/eventTargetDefiner';

import { CATEGORY_EL_CLASS, ADD_DISH_FORM_ID } from '../helpers/configs';

export function initMenuListener() {
	const menuContainer = document.getElementById('menuContainer');

	menuContainer.addEventListener('click', listenMenuContainer);

	const addDishBtn = document.getElementById('addDishBtn');

	addDishBtn.addEventListener('click', initCategoryAdding);

	initCloseBtnListener();
}

function listenMenuContainer(e) {
	const target = e.target;

	switch (true) {
		case eventTargetDefiner.isActiveCategoryEl(
			target.closest(CATEGORY_EL_CLASS) ? target.closest(CATEGORY_EL_CLASS) : target,
		):
			hideElement(target.closest(CATEGORY_EL_CLASS));
			break;
		case eventTargetDefiner.isCategoryHeadingEl(target):
			activateCollapse(target);
			break;
		default:
			return;
	}
}

export function initModalFormListener(formElId) {
	switch (true) {
		case formElId === ADD_DISH_FORM_ID:
			const formEL = document.getElementById(ADD_DISH_FORM_ID);
			formEL.addEventListener('submit', onAddDishFormSubmit);
	}
}
