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
					<div class="wrapper">
						<div class="card">
							<input type="checkbox" id="card1" class="more" aria-hidden="true" />
							<div class="content">
								<div class="front">
									<div class="inner">
										<h2>Rouge</h2>
										<label for="card1" class="button" aria-hidden="true">
											Details
                        </label>
									</div>
								</div>
								<div class="back">
									<div class="inner">
										<div class="description">
											<p>Rouge is a React app that is a women's e-commerce site</p>
											<p>Languages used</p>
										</div>
										<div class="location">Rouge</div>
										<label for="card1" class="button return" aria-hidden="true">
											<i class="fas fa-arrow-left"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="card">
							<input type="checkbox" id="card2" class="more" />
							<div class="content">
								<div class="front" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80">
									<div class="inner">
										<h2>In A Pinch</h2>
										<label for="card2" class="button" aria-hidden="true">
											Details
                        </label>
									</div>
								</div>
								<div class="back">
									<div class="inner">
										<div class="description">
											<p>
												Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas
                        fuga
                                odio vel veniam eveniet, explicabo autem earum?</p>
										</div>
										<div class="languages">Languages Used</div>
										<label for="card2" class="button return" aria-hidden="true">
											<i class="fas fa-arrow-left"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="card">
							<input type="checkbox" id="card3" class="more" />
							<div class="content">
								<div class="front" src="https://images.unsplash.com/photo-1529595354331-201ad3ae5e71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6114533e2d0c1c81534fe13611dbfd76&auto=format&fit=crop&w=658&q=80">
									<div class="inner">
										<h2>Etoile</h2>
										<label for="card3" class="button" aria-hidden="true">
											Details
                        </label>
									</div>
								</div>
								<div class="back">
									<div class="inner">
										<div class="description">
											<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                          temporibus tempore illo natuliqu quasi placeat aut
                          facilis
                                laudantium nam!</p>
											<p>Quam,deserunt unde dicta nesciunt,
                          repudiandae
                                aspernatur explicabo numquam! Tenetur!</p>
										</div>
										<div class="languages">Languages Used</div>
										<label for="card3" class="button return" aria-hidden="true">
											<i class="fas fa-arrow-left"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="card">
							<input type="checkbox" id="card3" class="more" />
							<div class="content">
								<div class="front" src="https://images.unsplash.com/photo-1529595354331-201ad3ae5e71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6114533e2d0c1c81534fe13611dbfd76&auto=format&fit=crop&w=658&q=80">
									<div class="inner">
										<h2>Ornate Optical</h2>
										<label for="card3" class="button" aria-hidden="true">
											Details
                        </label>
									</div>
								</div>
								<div class="back">
									<div class="inner">
										<div class="description">
											<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                          temporibus tempore illo natuliqu quasi placeat aut
                          facilis
                                laudantium nam!</p>
										</div>
										<div class="languages">Languages Used</div>
										<label for="card3" class="button return" aria-hidden="true">
											<i class="fas fa-arrow-left"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="card">
							<input type="checkbox" id="card3" class="more" />
							<div class="content">
								<div class="front" src="https://images.unsplash.com/photo-1529595354331-201ad3ae5e71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6114533e2d0c1c81534fe13611dbfd76&auto=format&fit=crop&w=658&q=80">
									<div class="inner">
										<h2>Piel</h2>
										<label for="card3" class="button" aria-hidden="true">
											Details
                        </label>
									</div>
								</div>
								<div class="back">
									<div class="inner">
										<div class="description">
											<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                          temporibus tempore illo natuliqu quasi placeat aut
                          facilis
                                laudantium nam!</p>
										</div>
										<div class="languages">Languages Used</div>
										<label for="card3" class="button return" aria-hidden="true">
											<i class="fas fa-arrow-left"></i>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}
export default Work





