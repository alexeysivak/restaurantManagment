import { removeElement } from '../views/commonView';

export function initCloseBtnListener() {
	const menuCloseButton = document.getElementById('closeButton');

	menuCloseButton.addEventListener('click', () => {
		const modalContainer = menuCloseButton.closest('#modalContainer');

		if (modalContainer) {
			closeModal();
			return;
		}

		removeElement(menuCloseButton.closest('#modalScreen'));
	});
}

export function closeModal() {
	const modalScreen = document.getElementById('modalContainer');

	removeElement(modalScreen);
}
