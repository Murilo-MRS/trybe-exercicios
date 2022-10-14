import React, { Component } from 'react';
import ColorsContext from '../context/ColorsContext';
import '../styles/box.css';

class ColorBox extends Component {
  render() {
    const { colors, nextColor, colorIndex } = this.context;
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: `${ colors[colorIndex] }` } }
        onClick={ nextColor }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = ColorsContext;
export default ColorBox;
