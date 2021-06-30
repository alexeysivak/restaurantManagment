export const menuScreenTemplate = `
        <section class="menu-screen" id="modalScreen">
			<header class="menu-screen__header">
				<h1 class="menu-screen__heading">Menu</h1>
				<button type="button" class="menu-screen__button" id="closeButton">&#10006</button> 
			</header>
			<main class="menu-screen__main" id="menuContainer">
			</main>
		</section>`;

export function getMenuCategoryTemplate(categoryName) {
	return `
	<div class="menu__category-block"  > 
		<div class="menu__controls-block">
			<h2 class="menu__category-heading">${categoryName}</h2>
			<div class="menu__controls"><button class="category__control-button">Add dish</button>
			<button class="category__control-button">Delete</button></div> 
		</div>
		<div class="category__dishes" data-id="${categoryName}"></div>
	</div>`;
}

export function getDishTemplate({ name, consist, price }) {
	return `
	<div class="category__dish">
		<div class="dish__info-block">
			<p><span>${name}</span> <span>${price}</span></p>
			<p>${consist.includes('consist') ? '' : consist} </p>
		</div>
		<div class="dish__controls-block">
			<button class="dish__control-button">Change</button>
			<button class="dish__control-button">Delete</button>
		</div>
	</div>	
	`;
}
