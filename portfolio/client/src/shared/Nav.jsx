import React, {Component} from 'react'
import '../styles/nav.scss'
import MenuContainer from './MenuContainer'

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId
        }
    }


    render() {
        return (
                <div className="hamburger-menu">
            <MenuContainer userId={this.props.userId} />
          </div>
      
        )

    }

}