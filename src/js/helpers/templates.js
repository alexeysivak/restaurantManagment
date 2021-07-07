/**
 * menu
 */

export const menuScreenTemplate = `
        <section class="menu-screen" id="modalScreen">
			<header class="menu-screen__header">
				<button type="button" class="menu-screen__button" id="addDishBtn">Add dish</button>
				<button type="button" class="menu__close-button" id="closeButton">&#10006</button> 
			</header>
			<main class="menu-screen__main" id="menuContainer">
			</main>
		</section>`;

export function getMenuCategoryTemplate(categoryName) {
	return `
	<div class="menu__category-block"> 
		<div class="menu__controls-block">
			<h2 class="menu__category-heading">${categoryName}</h2>
			<button class="category__control-button delete-button">Delete</button> 
		</div>
		<div class="category__dishes" data-id="${categoryName}"></div>
	</div>`;
}

export function getDishTemplate({ name, consist, price, id }) {
	return `
	<div class="category__dish" data-id="${id}">
		<div class="dish__info-block">
			<p><span>${name}</span> <span>${price}$</span></p>
			<p>${consist.includes('consist') || '' ? '' : consist} </p>
		</div>
		<div class="dish__controls-block">
			<button class="dish__control-button">Change</button>
			<button class="dish__control-button">Delete</button>
		</div>
	</div>	
	`;
}

/**
 * modals
 */
export const addDishModalTemplate = `
	<div class="modal__container"  id="modalContainer">
		<div class="modal__form-container">
			<button type="button" class="modal__close-button" id="closeButton">&#10006</button>
			<form class="modal__form" id="addDishForm">
				<input class="modal__form-input" placeholder="Enter dish name" name="name"/>
				<input class="modal__form-input" placeholder="Enter price" name="price"/>
				<input class="modal__form-input" placeholder="Enter category name" name="type"/>
				<input class="modal__form-input" placeholder="Consist" name="consist"/>
				<button type="submit" class="modal__submit-button" id="addButton">Add dish</button>
			</form>
			
		</div> 
	</div>
`;

export const confirmationModalTemplate = `
	<div class="modal__container"  id="modalContainer">
		<div class="modal__form-container" id="confirmationModal">
			<h2 class="modal__heading">Are you sure?</h2>
			<button type="button" class="modal__cencel-button">Cencel</button>
			<button type="button" class="modal__delete-button">Delete</button>
		</div> 
	</div>
`;

/**
 * errors
 */

export const emptyInputErrorTemplate = `
	<p class="error-message">This input can\`t be empty</p>
`;

export const nameIsNotUnique = `
	<p class="error-message">Entered name already exists</p>
`;
