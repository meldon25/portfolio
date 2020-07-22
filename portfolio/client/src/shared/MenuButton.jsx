import React, {Component} from 'react';
import '../styles/menubutton.scss'


class MenuButton extends React.Component {
    render() {
        return ( 
            <img
            src="https://i.imgur.com/bUMv33a.png" 
            id="hamburgerButton"
            onMouseUp={this.props.handleMouseDown}
            />
        )
    }

}

export default MenuButton;