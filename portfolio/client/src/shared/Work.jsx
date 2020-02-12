import React, { Component } from 'react'
import '../styles/work.css'


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
        <div className="work-cont">
          <h1 className='work-tab'><p className="contnum">1.</p>Work<div className="line-1"></div></h1>
        </div>
        <div className="cont-cont">
          <div className="project-1">
            <div className="project-1-img">
              <img src="https://i.imgur.com/LfVlM1L.png" />
            </div>
            <div className="project-1-desc">
              <h1 className="rouge-title">Rouge</h1>
              <p>Rouge is an e-commerce store that is built with <p className="bold-skills">React</p> and <p className="bold-skills">Ruby on Rails</p>.</p>
              <p>Rouge has full <p className="bold-skills">CRUD</p> capabilities with a built-out wishlist.</p>
              <p>Also includes <p className="bold-skills">authorization</p> built with <p className="bold-skills">Rails</p>.</p>
              <p className="languages-bar">Languages & Frameworks</p>
              <div className="icon-cont">
                <img src="https://i.imgur.com/WO07Gq3.png" />
                <img src="https://i.imgur.com/BgrE303.png" />
                <img src="https://i.imgur.com/a9y93DK.png" />
              </div>
              <div className="button-cont">
                <form action="https://rouge.surge.sh">
                <button className="link-button">Website</button>
                </form>
                <form action="https://github.com/meldon25/project-5">
                  <button className="github-button" type="submit">Github</button>
                </form>
              </div>
            </div>
          </div>
          <div className="project-2">
            <div className="project-2-desc">
              <h1 className="pinch-title">In A Pinch</h1>
              <p>In A Pinch is a <p className="bold-skills">React</p> app that was built during a collaboration with UX designers.</p>
              <p>The website adhered to a <p className="bold-skills">Zeplin</p> design and went through various usability tests.</p>
              <p className="languages-bar">Languages & Frameworks</p>
              <div className="icon-cont">
                <img src="https://i.imgur.com/WO07Gq3.png" />
                <img src="https://i.imgur.com/a9y93DK.png" />
              </div>
              <div className="button-cont">
                <form action="https://inapinch.surge.sh">
                  <button className="link-button">Website</button>
                </form>
                <form action="https://github.com/meldon25/p4-colab">
                  <button className="github-button" type="submit">Github</button>
                </form>
              </div>
            </div>
            <div className="project-2-img">
              <img src="https://i.imgur.com/4d4lqWo.png" />
            </div>
          </div>
          <div className="project-3">
            <div className="project-3-img">
              <img src="https://i.imgur.com/MxDShFM.png?1" />
            </div>
            <div className="project-3-desc">
              <h1 className="etoile-title">Etoile</h1>
              <p>Etoile is my first e-commerce website built with <p className="bold-skills">React</p>.</p>
              <p>It contains mock <p className="bold-skills">API</p> data and a <p className="bold-skills">Google API</p> on the 'Shop' page for store locations.</p>
              <p>It also contains <p className="bold-skills">hand-rolled authentication</p>.</p>
              <p className="languages-bar">Languages & Frameworks</p>
              <div className="icon-cont">
                <p><img src="https://i.imgur.com/WO07Gq3.png" /></p>
                <img className='css-icon' src="https://i.imgur.com/a9y93DK.png" />
              </div>
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





