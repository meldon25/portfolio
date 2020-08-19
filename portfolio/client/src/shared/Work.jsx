import React, { Component } from 'react'
import '../styles/work.scss'


class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }
  render() {
    return (
    
      <div id="Work">
        <div className="fullscreen-lang">
    <video loop muted autoPlay className="fullscreen-lang_video">
        <source autoPlay loop src="https://i.imgur.com/9BNK2wb.mp4" type="video/mp4" />
    </video>
</div>
      <div className="work-cont">
        <h2 className="project-header">Projects</h2>
      </div>
        <div className="cont-cont">
          <div className="project-1">
          <div className="project-img">
              <img src="https://i.imgur.com/nMKpCil.jpg" />
            </div>
            <div className="project-desc">
              <h1 className="project-title">NoteBoard</h1>
              <p className="lang-con">React, CSS/Sass, Ruby on Rails</p>
              <div className="button-cont">
                <form disabled action="https://inapinch.surge.sh">
                  <button className="link-button">Website</button>
                </form>
                <form disabled action="https://github.com/meldon25/p4-colab">
                  <button className="github-button" type="submit">Github</button>
                </form>
              </div>
            </div>
          </div>
          <div className="project-2">
            <div className="project-img">
              <img src="https://i.imgur.com/Sa93sJf.png" />
            </div>
            <div className="project-desc">
              <h1 className="project-title">Etoile</h1>
              <p className="lang-con">React, CSS/Sass, Ruby on Rails</p>
              <div className="button-cont">
                <form action="https://etoile.surge.sh">
                  <button className="link-button" type="submit">Website</button>
                </form>
                <form action="https://github.com/meldon25/p-two">
                  <button className="github-button" type="submit">Github</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      
        
    )
  }
}
export default Work





