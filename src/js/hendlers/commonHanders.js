import { removeElement, closeModalPopup } from '../views/commonView';

export function initCloseBtnListener() {
	const menuCloseButton = document.getElementById('closeButton');

	menuCloseButton.addEventListener('click', () => {
		const modalContainer = menuCloseButton.closest('#modalContainer');

		if (modalContainer) {
			closeModalPopup();
			return;
		}

		removeElement(menuCloseButton.closest('#modalScreen'));
	});
}

