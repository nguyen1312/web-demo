import React, { Component } from 'react';
import Header from './Header' 
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InitApi from '../../api/initApi'
import ListImage from './ListImage'
import Title from '../Title/Title'
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class VQA extends Component {
    state = {
      message: " "
    }

    componentDidMount() {
        InitApi.getInfo()
          .then(res => {
            const message = res.data;
            this.setState({ message });
          })
    }
  

    render() {
        return (
            <section id="contact">
                <Container>
                    <Title title="Demo" />
                    <Fade bottom duration={1000} delay={800} distance="30px">
                        <ListImage/>
                    </Fade>
                </Container>
            </section>
        // <section id="demo">
        //     <div>
        //         <Title title="Demo Visual Question Answering" />
        //         {/* Thiet ke input load image va cau hoi */}
        //         <ListImage/>
        //     </div>
        // </section>
        );
    }
}

export default VQA