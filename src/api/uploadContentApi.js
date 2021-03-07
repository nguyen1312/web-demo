import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadContentApi {
    static post(payload) {
        const uri = API_ROUTE + "/upload-content"
        return axios.post(uri, payload)
    }
}

export default UploadContentApi
