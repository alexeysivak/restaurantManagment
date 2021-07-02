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

export function renderElement(template, elToInsertIn) {
	elToInsertIn.insertAdjacentHTML('beforeend', template);
}

export function removeElement(el) {
	el.remove();
}

export function displayErrors(inputErrors) {
	deleteErrorEls();

	for (let key in inputErrors) {
		const elWithError = document.querySelector(`[name="${key}"]`);
		elWithError.insertAdjacentHTML('afterend', inputErrors[key]);
	}
}

export function deleteErrorEls() {
	const ERROR_EL_SELECTOR = '.error-message';

	const errors = document.querySelectorAll(ERROR_EL_SELECTOR);

	if (errors[0]) {
		Array.from(errors).forEach((el) => el.remove());
	}
}
