import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadBase64CodeApi {
    static post(payload) {
        const uri = API_ROUTE + "/upload-imageBase64"
        return axios.post(uri, payload)
    }
}

export default UploadBase64CodeApi