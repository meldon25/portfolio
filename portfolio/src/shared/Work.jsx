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
				<h1 className='about-tab'><p className="contnum">1.</p>Work<div className="line-1"></div></h1>
				<div className="cont-cont">
					<div className="project-1">
						<div className="project-1-img">
							<img src="https://i.imgur.com/LfVlM1L.png" />
						</div>
						<div className="project-1-desc">
							<h1>Rouge</h1>
							<p>Rouge is a women's e-commerce based store that is built with React and Ruby on Rails.</p>
							<p>Languages used:</p>
							<p>React</p>
							<p>Ruby on Rails</p>
							<div className="button-cont">
							<button className="link-button" disabled='disabled'>Stay Tuned</button>
							<form action="https://github.com/meldon25/project-5">
								<button className="github-button" type="submit">Github</button>
							</form>
							</div>
						</div>
					</div>
					<div className="project-2">
						<div className="project-2-desc">
							<h1>In A Pinch</h1>
							<p>In A Pinch is a React app that was a collaboration with UX designers. We adhered to a Zeplin design and built out functionality for the app.</p>
							<p>Languages used:</p>
							<p>React</p>
							<p>CSS</p>
							<div className="button-cont">
							<form action="https://inapinch.surge.sh">
							<button className="link-button">Live Link</button>
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
							<img src="https://i.imgur.com/wtIWIkL.png" />
						</div>
						<div className="project-3-desc">
							<h1>Etoile</h1>
							<p>Etoile is a React app that is based off of an e-commerce website.</p>
							<p>Languages used:</p>
							<p>React</p>
							<p>API</p>
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





