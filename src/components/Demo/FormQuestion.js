import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import {
    QUESTION_INPUT,
    SUBMIT
} from './constant'
import '../../style/vqa/FormStyle.css'
import UploadContentApi from '../../api/uploadContentApi'
import Chart from './Chart'


const FormQuestion = (props) => {
  const [question, setQuestion] = useState("")
  const [id, setId] = useState(1)
  const [prediction, setPrediction] = useState([])
  const handleChangeQuestion = (e) => setQuestion(e.target.value)
  const handleChangeId = (e) => setId(e.target.value)
  handleSummit = () => {
    UploadContentApi.post({id, question}).then((res, data) => {
      setPrediction(res.data.substring(1, res.data.length -1).split(","))
      console.log("hihi: ", prediction)
      console.log("Upload Image Successful")
    }).catch((err) => {
      console.log(err)
    }) 
  }
  return (
    <>
      <Form className='form'>
        <FormGroup>
          <Label for="exampleSelect">Select Image</Label>
          <Input type="select" 
                name="select" 
                id="exampleSelect" 
                onChange={handleChangeId}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">{ QUESTION_INPUT }</Label>
          <Input className="textarea" 
                type="textarea" 
                name="text" 
                id="exampleText" 
                onChange={handleChangeQuestion}

          />
        </FormGroup>
        <Button onClick={ handleSummit }>{ SUBMIT }</Button>
      </Form>
      <div>
            {/* <Table striped className="tableStyle">
            <thead>
              <tr>
                <th>#</th>
                <th>Answer Prediction</th>
              </tr>
            </thead>
            <tbody>
              {prediction.map(function(value, index){
                return(
                  <tr>
                      <th scope="row">{index}</th>
                      {console.log("abc", value, index)}
                      <td className="fontStyle">{value.substring(2).replace(':','')}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
          <Chart data={prediction}/>
      </div>
    </>

  );
}

export default FormQuestion;