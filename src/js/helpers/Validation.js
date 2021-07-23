import menuDataManager from '../dataManagers/MenuDataManager';
import { emptyInputErrorTemplate, nameIsNotUnique } from '../helpers/templates';

class Validation {
	constructor() {
		this._errors = {};
	}

	name(filledInput) {
		const [key, value] = filledInput;
		this.isInputFilled(filledInput);

		if (Object.getOwnPropertyNames(this._errors)[0]) {
			return;
		}

		// const menuData = menuDataManager.returnLoadedMenuData();

		// menuData.forEach((dish) => {
		// 	if (dish.name.toUpperCase() === value.toUpperCase()) {
		// 		this._errors[key] = nameIsNotUnique;
		// 	}
		// });
	}

	price(filledInput) {
		this.isInputFilled(filledInput);
	}

	type(filledInput) {
		this.isInputFilled(filledInput);
	}

	isInputFilled([key, value]) {
		if (!value.trim()) {
			this._errors[key] = emptyInputErrorTemplate;
		}
	}

	validate(formData) {
		this._errors = {};

		for (let entry of formData) {
			const [key, value] = entry;

			if (this[key]) {
				this[key](entry);
			}
		}
	}

	getErrors() {
		return this._errors;
	}
}

const validation = new Validation();

export default validation;
