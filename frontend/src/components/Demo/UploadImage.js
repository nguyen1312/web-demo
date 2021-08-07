import React, { Component } from 'react';
import UploadImageApi from '../../api/uploadImageApi';
import '../../style/vqa/UploadImage.css'
import { TITLE } from './constant'
class UploadImage extends Component {

    constructor() {
        super()
        this.state = {
            previewImageUrl: false,
            imageHeight: 200,
            value: "",
            
        }
        this.generatePreviewImageUrl = this.generatePreviewImageUrl.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.uploadHandler = this.uploadHandler.bind(this)
    }

    generatePreviewImageUrl(file, callback) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => callback(reader.result)
    }

    handleChange(event) {
      const file = event.target.files[0]
      if (!file) {
        return
      }

      this.setState({ 
            imageFile: file 
        })
      this.generatePreviewImageUrl(file, previewImageUrl => {
            this.setState({
              previewImageUrl,
            })
        })
    }

    uploadHandler(e) {
      const formData = new FormData()
      formData.append('image', this.state.imageFile, 'img.png')
      
      UploadImageApi.postImage(formData)
      .then(function(response, data) {
              data = response.data;
              console.log("Upload successful")
          })
    }

  render() {
    return (

      <div className="App">
        <header className="App-header">
        <div className="App-upload">
          <p>
              { TITLE }
          </p>

          <div>
              <input type="file" name="file" onChange={this.handleChange} />
          </div>
          <br/>
          

          <div>
              { this.state.previewImageUrl &&
                <img height={this.state.imageHeight} alt="" src={this.state.previewImageUrl} />
              }
          </div>
          <br/>
          <div>
              <input type="submit" onClick={this.uploadHandler} />
          </div>

          </div>
        </header>
      </div>
    );
  }
}

export default UploadImage