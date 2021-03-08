import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import Wave from 'react-wavify'

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
        <div>
        <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
        />
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