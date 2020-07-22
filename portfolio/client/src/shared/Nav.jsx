import React from 'react'
import '../styles/nav.scss'
import MenuContainer from './MenuContainer'

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId
        }
    }


    render() {
        return (
            <div className="board_menu">
            <MenuContainer userId={this.props.userId} />
          </div>
        )

    }

}
export default Nav