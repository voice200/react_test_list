export default class ServicesData {
    _apiBase = 'http://localhost:3000/'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }
        return await res.json();
    }

    getAllUsers = async () =>{
        const res = await this.getResource('users');
        return res;
    }
    getUserId = async (id) => {
        const user = await this.getResource(`users/${id}`);
        return user;
    }
    getCountry = async() => {
        const res = await this.getResource('country');
        return res;
    }

    async deleteResource (url){
        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }
        return await res.json();
    }

    deleteUser = async (id) => {
        const res = await this.deleteResource(`users/${id}`);
        return res
    }

    async postResource (url, data) {

        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    }
     updateUser = async(id, data) => {
         const res = await this.postResource(`users/${id}`, data);
         return res;
     }
}