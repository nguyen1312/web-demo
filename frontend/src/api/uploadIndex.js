import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadImageApi2 {
    static postImage(payload) {
        const uri = API_ROUTE + "/upload_image2"
        return axios.post(uri, payload)
    }
}

export default UploadImageApi2
