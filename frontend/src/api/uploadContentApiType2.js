import API_ROUTE from "./apiRoute"
import axios from 'axios'


class UploadContentApiType2 {
    static post(file, question) {
        const uri = API_ROUTE + "/upload-image"
        const formData = new FormData();
        formData.append('myImage', file);
        formData.append('question', question);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(uri, formData, config)
    }
}

export default UploadContentApiType2
