import axios from 'axios';

let service = {
    getUser(since) {
        return axios.get('https://api.github.com/users', { params: { since }});
    }
}

export default service;
