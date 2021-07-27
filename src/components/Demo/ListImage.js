
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageDisplay from './ImageDisplay'
import FormQuestion from './FormQuestion'
import UploadImageApi from '../../api/uploadImageApi';
class ListImage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {image: `img/1.jpg`};
    }
    // getBase64(file) {
    //     return new Promise(resolve => {
    //       let fileInfo;
    //       let baseURL = "";
    //       // Make new FileReader
    //       let reader = new FileReader();
    
    //       // Convert the file to base64 text
    //       console.log("hihi: ", file)
    //       reader.readAsDataURL(file);
    
    //       // on reader load somthing...
    //       reader.onload = () => {
    //         // Make a fileInfo Object
    //         console.log("Called", reader);
    //         baseURL = reader.result;
    //         console.log(baseURL);
    //         resolve(baseURL);
    //       };
    //       console.log(fileInfo);
    //     });
    // }   
    
    render() {
        let arrayImage = []
        for (let i = 1; i <= 5; i++)
        {
            arrayImage.push(i)
        }
        return (
            <>
                <Carousel onClickItem=
                    {   
                        (e)=>{
                                this.setState({
                                    "image": `img/${e + 1}.jpg`  
                                })
                               
                                
                                const toBase64 = (url, callback) => {
                                    var xhr = new XMLHttpRequest();
                                    xhr.onload = function() {
                                        var reader = new FileReader();
                                        reader.onloadend = function() {
                                            callback(reader.result);
                                        }
                                        reader.readAsDataURL(xhr.response);
                                    };
                                    xhr.open('GET', url);
                                    xhr.responseType = 'blob';
                                    xhr.send();
                                }
                                toBase64(this.state.image,
                                        function(dataUrl) {
                                            const config = {
                                            headers: {
                                                "content-type": "multipart/form-data",
                                                "accept":"application/json", 
                                            }
                                            };
                                            const data = new FormData()
                                            data.append("image", dataUrl)
                                            UploadImageApi.postImage(data, config).then((res, data) => {
                                            console.log("Upload Image Successful")
                                            console.log(res)
                                                        
                                        });
                                    }
                                );
                                // const config = {
                                // headers: {
                                //     "content-type": "multipart/form-data",
                                //     "accept":"application/json", 
                                // }
                                // };
                                // const data = new FormData()
                                // data.append("image", this.state.image)
                                // UploadImageApi.postImage(data, config).then((res, data) => {
                                // console.log("Upload Image Successful")
                                // console.log(res)
                                // setPrediction(res.data.substring(1, res.data.length -1).split(","))
                                // console.log("hihi: ", prediction)
                                
                                // }).catch((err) => {
                                // console.log(err)
                                // }) 
                                
                        }
                    }
                >
                {
                    arrayImage.map((idx, index) =>  {
                            const carousel = <div key={index}>
                                <ImageDisplay key={index}  id={idx}/>
                                <p className="legend">Picture {idx}</p>
                            </div>
                            return carousel
                        }    
                    )
                }
                </Carousel>
                <FormQuestion/>
            </>
        );
    }
}
export default ListImage