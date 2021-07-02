/**
 * menu
 */

export const menuScreenTemplate = `
        <section class="menu-screen" id="modalScreen">
			<header class="menu-screen__header">
				<button type="button" class="menu-screen__button" id="addCategoruBtn">Add category</button>
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
			<div class="menu__controls"><button class="category__control-button">Add dish</button>
			<button class="category__control-button">Delete</button></div> 
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
export const addCategoryModalTemplate = `
	<div class="modal__container"  id="modalContainer">
		<div class="modal__form-container">
			<button type="button" class="modal__close-button" id="closeButton">&#10006</button>
			<form class="modal__form" id="addCategoryForm">
				<input class="modal__form-input" placeholder="Enter category name" name="categoryName"/>
				<button type="submit" class="modal__submit-button" id="addButton">Add category</button>
			</form>
			
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
