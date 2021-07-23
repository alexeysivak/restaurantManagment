class MockApi {
	constructor() {
		this.BASE_URL = 'https://60d6032d943aa60017768d88.mockapi.io';
	}

	// categories
	getCategoriesData() {
		const url = `${this.BASE_URL}/categories`;

		return this.doFetch(url);
	}

	getCategoryDishesData(categoryId) {
		const url = `${this.BASE_URL}/categories/${categoryId}/menu`;

		return this.doFetch(url);
	}

	addCategoryData(categoryName) {
		const url = `${this.BASE_URL}/categories`;
		const options = {
			method: 'POST',
			body: JSON.stringify({ name: categoryName }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		return this.doFetch(url, options);
	}

	deleteCategoryData(categoryId) {
		const url = `${this.BASE_URL}/categories/${categoryId}`;
		const options = {
			method: 'DELETE',
		};

		this.doFetch(url, options);
	}

	// dishes
	addDish(dish, categoryId) {
		const url = `${this.BASE_URL}/categories/${categoryId}/menu`;
		const options = {
			method: 'POST',
			body: JSON.stringify(dish),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		return this.doFetch(url, options);
	}

	async doFetch(url, options) {
		try {
			let response;
			if (options) {
				response = await fetch(url, options);
				console.log(url, options);
			} else {
				response = await fetch(url);
			}

			if (!response.ok) {
				throw new Error('request error');
			}

			return response.json();
		} catch (e) {
			console.error(e);
		}
	}
}

const mockApi = new MockApi();

export default mockApi;
