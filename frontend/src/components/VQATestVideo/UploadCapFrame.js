import React, { Component } from "react";
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';
import captureVideoFrame from 'capture-video-frame'
import '../../style/vqa/UploadVideo.css'
import { Upload } from '@progress/kendo-react-upload';
import { ProgressBar } from "react-bootstrap";
import axios,  { CancelToken, isCancel } from 'axios';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import UploadContentApiType2 from '../../api/uploadContentApiType2'


/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */

class UploadCapFrame extends React.Component {
	constructor (props) {
        super(props)
    
        this.state = {
            playing: true,
            image: null,
            isLoadVideo: false,
            isCaptureFrame: false,
            question: "",
            file: "",
            uploadPercentage: 0
        }
        this.handleUpload = this.handleUpload.bind(this)
    }
    handleUpload(event) {
        console.log(URL.createObjectURL(event.target.files[0]))
        if(event.target.files.length !== 0){
            this.setState({file: URL.createObjectURL(event.target.files[0])})
        }
    }
    handleChangeQuestion = (event) => this.setState({question: event.target.value})
    handleSummit = () => {
        let file = this.state.image
        let question = this.state.question
        UploadContentApiType2.post(file, question).then((res, data) => {
          console.log("Upload Image Successful")
        //   setPrediction(res.data.substring(1, res.data.length -1).split(","))
        //   console.log("hihi: ", prediction)
        //   console.log("Upload Image Successful")
        }).catch((err) => {
          console.log(err)
        }) 
    }
    uploadFile = (event) => {
        let data = new FormData();
        data.append("file", event.target.files[0]);
        if(event.target.files.length !== 0){
            this.setState({file: URL.createObjectURL(event.target.files[0]),
                           isLoadVideo: true })
        }
        const options = {
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;

                let percent = Math.floor((loaded * 100) / total);

                if (percent < 100) {
                    this.setState({uploadPercentage: percent});
                }
            }
        }
        axios
            .post(
                "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                data,
                options
            )
            .then(res => {
                console.log(res);
                this.setState({uploadPercentage: 0});

                setTimeout(() => {
                    this.setState({uploadPercentage: 0});
                }, 10000);
            })
            .catch(err => {
                console.log(err);

                if (isCancel(err)) {
                    alert(err.message);
                }
                this.setState({uploadPercentage: 0});
            });
    }
    
    render() {
        return (
            <div>
                <div>
                    {/* <Upload
                        batch={false}
                        files={this.state.file}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                        removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                    /> */}

                    <div className="row justify-content-center bg-light">
                        <div className="col-md-6 text-center">
                    <h2>Upload your profile picture</h2>

                    <p>
                        You can upload a sample file to see the progress bar
                        without cancel file upload button
                    </p>
                    <p>
                        <input
                            type="file"
                            className="form-control-file"
                            onChange={this.uploadFile}
                        />
                    </p>
                    {this.state.uploadPercentage > 0 && (
                        <div className="row mt-3">
                            <div className="col pt-1">
                                <ProgressBar
                                    now={this.state.uploadPercentage}
                                    striped={true}
                                    label={`${this.state.uploadPercentage}%`}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
                </div>
                {/* <div id="upload-box">
                    <input type="file" onChange={this.handleUpload} />
                    <p>Filename: {this.state.file.name}</p>
                    <p>File type: {this.state.file.type}</p>
                    <p>File size: {this.state.file.size} bytes</p>
                   
            </div> */}
                <div className="App">
                    <ReactPlayer 
                        ref = { player => { this.player = player }}
                        url = {this.state.file}
                        playing = {this.state.playing}
                        width = '640px'
                        height = '500px'
                        config = {{ file: { attributes: {
                            crossorigin: 'anonymous'
                        }}}}
                    />
                  
                </div>
                { this.state.isLoadVideo && <>
                    <Button outline color="success" size="lg" onClick={() => this.setState({ playing: true })}> Play </Button>
                    <Button outline color="success" size="lg" onClick={() => this.setState({ playing: false })}> Pause </Button>
                    <Button outline color="success" size="lg" onClick={() => {
                        console.log(this.player)
                        const frame = captureVideoFrame(this.player.getInternalPlayer())
                    console.log('captured frame', frame)
                    this.setState({ image: frame.dataUri,
                                    isCaptureFrame: true })
                    }}> Capture Frame </Button>
                    <br />
                </>
                }
                {
                    this.state.image && <>
                        <br/>
                        <img src={this.state.image} width='500px' />
                    </>
                }
                {this.state.isCaptureFrame && <>
                    
                    <Form>
                    <FormGroup>
                        <Label for="exampleText"> Enter your Question </Label>
                        <Input className="textarea" 
                                type="textarea" 
                                name="text" 
                                id="exampleText" 
                                onChange={this.handleChangeQuestion}

                        />
                        </FormGroup>
                        <Button onClick={this.handleSummit }> Submit </Button>
                    </Form>
                </>}
            </div>
        );
    }
}


export default UploadCapFrame;