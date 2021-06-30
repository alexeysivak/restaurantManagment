const ACTIVE_EL_CLASS = 'visible';

export function hideElements(elsClass) {
	const elements = document.querySelectorAll(elsClass);

	Array.from(elements).forEach((el) => el.classList.remove(ACTIVE_EL_CLASS));
}

export function showElement(el) {
	if (!el.classList.contains(ACTIVE_EL_CLASS)) {
		el.classList.add(ACTIVE_EL_CLASS);
	}
}

export function hideElement(el) {
	el.classList.remove(ACTIVE_EL_CLASS);
}

export function renderScreenModal(template) {
	document.body.insertAdjacentHTML('beforeend', template);
}

export function renderEl(template, elToInsertIn) {
	elToInsertIn.insertAdjacentHTML('beforeend', template);
}

export function removeEl(el) {
	el.remove();
}
