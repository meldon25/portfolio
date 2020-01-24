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
        <div className="cont-cont">
 <div class="wrapper">
        <div class="card">
            <input type="checkbox" id="card1" class="more" aria-hidden="true" />
            <div class="content">
                <div class="front" src='https://i.imgur.com/fwn5XA0.mp4'>
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
                        <div class="info">
                            <span>4</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>3</span>
                            <div class="icon">
                                <i class="fas fa-door-open"></i>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>2</span>
                            <div class="icon">
                                <i class="fas fa-bed"></i>
                                <span>beds</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>1</span>
                            <div class="icon">
                                <i class="fas fa-bath"></i>
                                <span>bath</span>
                            </div>
                        </div>
                        <div class="description">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas
                                fuga
                                odio vel veniam eveniet, explicabo autem earum?</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                        <div class="location">Warsaw, Poland</div>
                        <div class="price">42€ / day</div>
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
                        <div class="info">
                            <span>8</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>7</span>
                            <div class="icon">
                                <i class="fas fa-door-open"></i>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>5</span>
                            <div class="icon">
                                <i class="fas fa-bed"></i>
                                <span>beds</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>2</span>
                            <div class="icon">
                                <i class="fas fa-bath"></i>
                                <span>baths</span>
                            </div>
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero
                                totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore,
                                temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut
                                facilis
                                laudantium nam!</p>
                            <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                                repudiandae
                                aspernatur explicabo numquam! Tenetur!</p>
                        </div>
                        <div class="location">Cracow, Poland</div>
                        {/* <div class="price">60€ / day</div> */}
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





