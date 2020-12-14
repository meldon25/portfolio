import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../styles/menu.scss'


export default class Menu extends Component {

    render() {
        let visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show";
        }

        const aboutMe = this.props.userId ? 
            (
                <h2>
                <Link className="link" to="#About">
                    About
                    </Link>
                    </h2>
                    ) : null;

        const myProjects = this.props.userId ?
        (
            <h2>
                <Link className="link" to="#Projects">
                    Projects
                    </Link> 
            </h2>
            ) : null;

        return (
            <div className="menu-nav">
      <div id="flyoutMenu"
        onMouseUp={this.props.handleMouseDown}
        className={visibility}>
        <h2>
          <Link className="link" to="#About">
              About
          </Link>
          <Link className="link" to="#Projects">
              Projects
          </Link>
          <Link className="link" to="#Contact">
              Contact
          </Link>
          <a className="link" href="https://drive.google.com/file/d/1Bw1dOn66QGcj4dLepDiDYY0lmKoQsuc5/view?usp=sharing">Resume</a>
        </h2>
      </div>
      </div>
        )
    }
}