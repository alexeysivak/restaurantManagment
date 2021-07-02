class MockApi {
	constructor() {
		this.BASE_URL = 'https://60d6032d943aa60017768d88.mockapi.io/menu';
	}

	getMenu() {
		const url = this.BASE_URL;

		return this.doFetch(url);
	}

	addDish(dish) {
		const url = this.BASE_URL;
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

	deleteDish() {}

	changeDish() {}

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
