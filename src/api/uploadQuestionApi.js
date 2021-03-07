import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadQuestionApi {
    static postQuestion( payload ) {
        const uri = API_ROUTE + "/upload-question"
        return axios.post(uri, { payload })
    }
}

export default UploadQuestionApi