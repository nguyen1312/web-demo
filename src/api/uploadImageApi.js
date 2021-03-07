import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadImageApi {
    static postImage( payload ) {
        const uri = API_ROUTE + "/upload"
        return axios.post(uri, payload)
    }
}

export default UploadImageApi

