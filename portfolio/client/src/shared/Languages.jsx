import React, {Component} from 'react'
import '../styles/languages.scss'


class Languages extends Component {

        render() { 
            return (  
                <div className="lang-cont">
                    <div className="fullscreen-lang">
    <video loop muted autoPlay className="fullscreen-lang_video">
        <source autoPlay loop src="https://i.imgur.com/9BNK2wb.mp4" type="video/mp4" />
    </video>
</div>
             <p className="skill-bar">Languages & Frameworks</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li>HTML5<img className="lang-icon" src="https://i.imgur.com/ZkWndn3.png" /></li>
                   <li>CSS/Sass
                   <img className="lang-icon" src="https://i.imgur.com/I5jk1fB.png" /><img className="lang-icon" src="https://i.imgur.com/mCiOwWf.png" /></li> 
                   <li>JavaScript<img className="lang-icon" src="https://i.imgur.com/IcwuflE.png" /></li>
                   <li>React<img className="lang-icon" src="https://i.imgur.com/DJxJtVU.png" /></li>
               </ul>
               <ul className='center-skills'>
               <li>Node.js<img className="lang-icon" src="https://i.imgur.com/UNRlnF1.png" /></li>
               <li>PostgreSQL & SQL<img className="lang-icon" src="https://i.imgur.com/j83edk9.png" /></li>
                   <li>Ruby</li>
                   <li>Ruby on Rails<img className="lang-icon" src="https://i.imgur.com/Pm4LpOD.png" /></li>
               </ul>
               <ul className='right-skills'>
                    <li>Express</li>
                    <li>Wordpress</li>
                    <li>Responsive Design</li>
                    <li>Figma</li>
               </ul>
            </div>
            </div>
     
            )
        }
}
export default Languages