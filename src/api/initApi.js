import API_ROUTE from "./apiRoute"
import axios from 'axios'

class InitApi {
    static getInfo() {
        const uri = API_ROUTE + "/"
        return axios.get(uri)
    }
}

export default InitApi