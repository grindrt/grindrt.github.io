export default class FetchProxy {
    static fetch(url) {
        const status = (response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }

        const json = (response) => {
            return response.json();
        }

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(status)
                .then(json)
                .then(data => resolve(data))
                .catch(exception => reject(exception))
        });
    }
}