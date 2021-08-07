import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadImageApi {
    static postImage(payload) {
        console.log(payload)
        const uri = API_ROUTE + "/upload_image"
        return axios.post(uri, payload)
    }
}

export default UploadImageApi

