import React, { Component } from 'react';
import UploadQuestionApi from '../../api/uploadQuestionApi';

class UploadQuestion extends Component {

    constructor() {
        super()
        this.state = {
            questionContent: "",  
            answerPrediction: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.uploadHandler = this.uploadHandler.bind(this)
    }
    handleChange(e) {
      e.preventDefault()
      this.setState({
        questionContent: e.target.value
      })
    }

    uploadHandler() {
      let data = this.state.questionContent
      UploadQuestionApi.postQuestion(data).then((res, data) => {
        data = res.data
        this.setState({
          answerPrediction: data
        })
        console.log("Upload Image Successful")
      })
    }
  render() {
    return (
      <div>
          <div>
              <input type="text" onChange={this.handleChange} />
          </div>
          <div>
              <input type="submit" onClick={this.uploadHandler} />
          </div>
      </div>
    );
  }
}

export default UploadQuestion