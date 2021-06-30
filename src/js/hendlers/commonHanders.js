import { removeEl } from '../views/commonView';

export function initCloseBtnListener() {
	const closeButton = document.getElementById('closeButton');

	closeButton.addEventListener('click', () => removeEl(closeButton.closest('#modalScreen')));
}
