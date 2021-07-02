import menuDataManager from '../dataManagers/MenuDataManager';
import { emptyInputErrorTemplate, nameIsNotUnique } from '../helpers/templates';

class Validation {
	constructor() {
		this.errors = {};
	}

	categoryName(filledInput) {
		const [key, value] = filledInput;

		this.isInputFilled(filledInput);

		if (Object.getOwnPropertyNames(this.errors)[0]) {
			return;
		}

		if (menuDataManager.getCategories().includes(value)) {
			this.errors[key] = nameIsNotUnique;
		}
	}

	isInputFilled([key, value]) {
		if (!value.trim()) {
			this.errors[key] = emptyInputErrorTemplate;
		}
	}

	validate(filledInput) {
		this.errors = {};

		const [key] = filledInput;

		this[key](filledInput);

		return this.errors;
	}
}

const validation = new Validation();

export default validation;
