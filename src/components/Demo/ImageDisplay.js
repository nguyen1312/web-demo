
import React, { Component } from 'react';
import '../../style/vqa/ImageStyle.css'
class ImageDisplay extends Component {
    constructor(props)
    {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        //TODO
    }
  render() {
    return (
      <>
        <img className='image-style' 
             alt='Test' 
             src={`img/${this.props.id}.jpg`}
             onClick={this.handleClick}        
        /> 
      </> 
    )
  }
}

export default ImageDisplay