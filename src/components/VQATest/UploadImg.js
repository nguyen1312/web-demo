import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import Wave from 'react-wavify'
import UploadBase64CodeApi from '../../api/uploadBase64Code'
import { Button } from 'reactstrap'

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        base64URL: "",
        file: []
      };
    this.onDrop = this.onDrop.bind(this);
    this.handleSummit = this.handleSummit.bind(this)
  }

  handleSummit() {
    let { base64URL } = this.state 
    UploadBase64CodeApi.post({ base64URL }).then((res, data) => {
      console.log("Upload Image Successful")
    }).catch((err) => {
      console.log(err)
    }) 
  }

  onDrop(pictureFile, pictureDataURLs) {
    if (pictureFile.length > 0) {
      let file = pictureFile[0]
      console.log(file)
      this.getBase64(file)
        .then(result => {
          file["base64"] = result;
          this.setState({
            base64URL: result,
            file: pictureFile
          });
        })
        .catch(err => {
          console.log(err);
        });
      } 
    else {
      this.setState({
        base64URL: "",
        file: pictureFile
      })
    }
  }

  getBase64(file) {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
  
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
    });
  };
  

  render() {
    
    return (
        <div>
        <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText="Choose image"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            singleImage={true}
        />
        {console.log(this.state.file)}
        { this.state.file.length > 0 && <Button onClick={ this.handleSummit }>{ "Submit" }</Button> }

        <div style={{
                position: "fixed",
                bottom: "0",
                width: "100%"
        }}>
            <Wave mask="url(#mask)" fill="#1277b0" >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="white" />
                    <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                    <rect x="0" y="0" width="3000" height="300" fill="url(#gradient)"  />
                    </mask>
                </defs>
            </Wave>
        </div>
      </div>
      
    );
  }
}

export default UploadImg;