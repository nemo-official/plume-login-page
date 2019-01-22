import React, { Component } from 'react'

class TextBox extends Component{
  render() {

    return(

           <input className="textBox col-4.5"
           type={this.props.type}
           placeholder={this.props.value}
           style={this.props.style}
            />


       )
}
}
export default TextBox;
