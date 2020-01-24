import React, {Component} from 'react'
import '../styles/languages.css'

export default class Languages extends Component {

        render() { 
            return (  
                <div className="lang-cont">
             <p className="skill-bar">Languages & Frameworks</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li><div className="arrow"></div>HTML5<img className="html-icon" src="https://i.imgur.com/ZkWndn3.png" /></li>
                   <li><div className="arrow"></div>CSS/Sass
                   <img className="css-icon" src="https://i.imgur.com/I5jk1fB.png" /><img className="sass-icon" src="https://i.imgur.com/mCiOwWf.png" /></li> 
                   <li><div className="arrow"></div>JavaScript<img className="js-icon" src="https://i.imgur.com/IcwuflE.png" /></li>
                   <li><div className="arrow"></div>React<img className="react-icon" src="https://i.imgur.com/DJxJtVU.png" /></li>
                   <li><div className="arrow"></div>Node.js<img className="-node-icon" src="https://i.imgur.com/UNRlnF1.png" /></li>
                   <li><div className="arrow"></div>Express</li>
               </ul>
               <ul className='right-skills'>
                    <li><div className="arrow"></div>Flexbox</li>
                    <li><div className="arrow"></div>Responsive Design</li>
                    <li><div className="arrow"></div>Figma</li>
                   <li><div className="arrow"></div>PostgreSQL & SQL<img className="sql-icon" src="https://i.imgur.com/j83edk9.png" /></li>
                   <li><div className="arrow"></div>Ruby</li>
                   <li><div className="arrow"></div>Ruby on Rails<img className="sql-icon" src="https://i.imgur.com/Pm4LpOD.png" /></li>
               </ul>
            </div>
            </div>
     
            )
        }
}