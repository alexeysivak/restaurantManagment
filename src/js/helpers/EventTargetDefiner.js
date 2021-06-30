class EventTargetDefiner {
	ACTIVE_EL_CLASS = 'visible';
	CATEGORY_HEADING_EL_CLASS = 'menu__category-heading';
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
}

const eventTargetDefiner = new EventTargetDefiner();

export default eventTargetDefiner;
