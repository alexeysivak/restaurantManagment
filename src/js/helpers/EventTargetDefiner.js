class EventTargetDefiner {
	ACTIVE_EL_CLASS = 'visible';
	CATEGORY_HEADING_EL_CLASS = 'menu__category-heading';
	DELETE_BTN_CLASS = 'delete-button';
	MODAL_DELETE_BTN_CLASS = 'modal__delete-button';
	MODAL_CENCEL_BTN_CLASS = 'modal__cencel-button';
	constructor() {}

	isActiveCategoryEl(eventTarget) {
		if (eventTarget.classList.contains(this.ACTIVE_EL_CLASS)) {
			return true;
		}

		return false;
	}

	isCategoryHeadingEl(eventTarget) {
		if (eventTarget.classList.contains(this.CATEGORY_HEADING_EL_CLASS)) {
			return true;
		}

		return false;
	}

	isDeleteCategoryBtnEl(eventTarget) {
		if (eventTarget.classList.contains(this.DELETE_BTN_CLASS)) {
			return true;
		}

		return false;
	}

	isConfirmDelitionBtnEl(eventTarget) {
		if (eventTarget.classList.contains(this.MODAL_DELETE_BTN_CLASS)) {
			return true;
		}

		return false;
	}

	isConfirmCencelBtnEl(eventTarget) {
		if (eventTarget.classList.contains(this.MODAL_CENCEL_BTN_CLASS)) {
			return true;
		}

		return false;
	}
}

const eventTargetDefiner = new EventTargetDefiner();

export default eventTargetDefiner;
