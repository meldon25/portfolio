import React, {Component} from 'react'
import '../styles/languages.scss'


class Languages extends Component {

        render() { 
            return (  
                <div className="lang-cont">
             <p className="skill-bar">Languages & Frameworks</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li>HTML5</li>
                   <li>CSS/Sass</li> 
                   <li>JavaScript</li>
                   <li>jQuery</li>
                   
               </ul>
               <ul className='center-skills'>
               <li>React</li>
               <li>PostgreSQL & SQL</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
               </ul>
               <ul className='right-skills'>
                   <li>Node.js</li>
                    <li>Express</li>
                    <li>WordPress</li>
                    <li>Shopify</li>
               </ul>
            </div>
            </div>
     
            )
        }
}
export default Languages