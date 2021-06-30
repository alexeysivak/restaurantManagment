class MockApi {
	constructor() {
		this.BASE_URL = 'https://60d6032d943aa60017768d88.mockapi.io/menu';
	}

	getMenu() {
		const url = this.BASE_URL;

		return this.doFetch(url);
	}

	addDish() {}

	deleteDish() {}

	changeDish() {}

	async doFetch(url, options) {
		try {
			let response;
			if (options) {
				response = await fetch(url, options);
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
