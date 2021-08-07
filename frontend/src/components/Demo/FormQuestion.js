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
  // const [id, setId] = useState(1)
  const [prediction, setPrediction] = useState([])
  const handleChangeQuestion = (e) => setQuestion(e.target.value)

  // const handleChangeId = (e) => setId(e.target.value)
  const handleSummit = () => {
    const data = new FormData()
    data.append("question", question)
    UploadContentApi.post(data).then((res, data) => {
      console.log("Upload Image Successful")
      let answers = res.data.slice(1, res.data.length - 1)
      answers = answers.split(",")
      setPrediction(answers)
      
    }).catch((err) => {
      console.log(err)
    }) 
  }
  return (
    <>
      <Form className='form'>
        <FormGroup>
          <Label for="exampleText" size="lg" color="muted">{ QUESTION_INPUT }</Label>
          <Input className="textarea" 
                type="textarea" 
                name="text" 
                id="exampleText" 
                placeholder="Nhập câu hỏi" 
                bsSize="lg"
                onChange={handleChangeQuestion}

          />
        </FormGroup>
        <Button onClick={ handleSummit } size="lg">{ SUBMIT }</Button>
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