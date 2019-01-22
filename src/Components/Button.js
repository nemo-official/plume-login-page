import React, { Component } from 'react';
import Styled from 'styled-components';



class Button extends Component{
  render() {

    return(


<button href="" className="button col-5" style={this.props.style} >{this.props.writing} </button>
       )

}
}

export default Button;
