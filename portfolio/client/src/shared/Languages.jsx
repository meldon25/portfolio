import React, {Component} from 'react'
import '../styles/languages.scss'


class Languages extends Component {

        render() { 
            return (  
                <div className="lang-cont">
                    {/* <div className="fullscreen-lang">
    <video loop muted autoPlay className="fullscreen-lang_video">
        <source autoPlay loop src="https://i.imgur.com/9BNK2wb.mp4" type="video/mp4" />
    </video>
</div> */}
             <p className="skill-bar">Languages & Frameworks</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li>HTML5</li>
                   <li>CSS/Sass</li> 
                   <li>JavaScript</li>
                   <li>React</li>
               </ul>
               <ul className='center-skills'>
               <li>Node.js</li>
               <li>PostgreSQL & SQL</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
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