import React, { Component } from 'react'
import Menu from './Menu'
import MenuButton from './MenuButton'

class MenuContainer extends React.Component {
    constructor(props,context) {
        super(props,context);

        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log('Clicked');
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu userId={this.props.userId} handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
          </>
        )
    }
}
export default MenuContainer;