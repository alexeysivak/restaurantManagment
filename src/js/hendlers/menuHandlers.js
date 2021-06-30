import { hideElements, showElement, hideElement } from '../views/commonView';

import eventTargetDefiner from '../helpers/eventTargetDefiner';

const CATEGORY_EL_CLASS = '.menu__category-block';

export function initMenuListener() {
	const menuContainer = document.getElementById('menuContainer');

	menuContainer.addEventListener('click', listenMenuContainer);
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

function activateCollapse(eventTarget) {
	hideElements(CATEGORY_EL_CLASS);

	const categoryEl = eventTarget.closest(CATEGORY_EL_CLASS);
	showElement(categoryEl);
}
