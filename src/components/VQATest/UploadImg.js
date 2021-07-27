import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import Wave from 'react-wavify'
import "../../style/vqa/ImageStyle.css"
import UploadImageApi from "../../api/uploadImageApi";
import { Button } from 'reactstrap'
import { left } from "@popperjs/core";
import FormQuestion from "../Demo/FormQuestion";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        base64URL: "",
        file: [],
        isSuccessful: false
      };
    this.onDrop = this.onDrop.bind(this);
    this.handleSummit = this.handleSummit.bind(this)
  }

  handleSummit() {
    let { base64URL, file } = this.state 
    const data= new FormData()
    data.append("image", file[0])
    UploadImageApi.postImage(data).then((res, data) => {
    }).catch((err) => {
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
        <div className="outer">
          <div className="inner_featured">
            <ImageUploader

                withIcon={true}
                withPreview={true}
                buttonText="Choose image"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                className="image-style"
                label="Effective applying Vietnamese for VQA system"
            />
          </div>
          { this.state.file.length > 0 && this.handleSummit() }
          { this.state.file.length > 0 && <div className="inner"><FormQuestion/></div>}
      </div>
      
    );
  }
}


export default UploadImg;