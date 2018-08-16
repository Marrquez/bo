import React, { Component } from 'react';
import './Carrousel.css';

class Carrousel extends Component {
    constructor(props) {
        super();
        this.state = { }
    }
    componentDidMount(){ }
    componentWillMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
  render() {
      return (
          <article id="carousel" className="Carrousel section-wrapper clearfix">
              <div className="content-wrapper clearfix">
                  <div id="features-carousel" className="carousel slide with-title-indicators max-height" data-height-percent="70" data-ride="carousel">
                      <ol className="carousel-indicators title-indicators">
                          <li data-target="#features-carousel" data-slide-to="0" className="active">Lorem Ipsum</li>
                          <li data-target="#features-carousel" data-slide-to="1">Suspendisse</li>
                          <li data-target="#features-carousel" data-slide-to="2">Maecenas</li>
                          <li data-target="#features-carousel" data-slide-to="3">Scelerisque</li>
                      </ol>
                      <div className="carousel-inner">
                          <div className="item active">
                              <div className="carousel-text-content">
                                  <i className="lazy pull-right icon fa fa-fighter-jet" alt="Lorem Ipsum"></i>
                                  <h2 className="title">Lorem Ipsum</h2>
                                  <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio.</p>
                                  <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-2">
                                      <h1>Lorem Ipsum</h1>
                                      <p><i className="lazy pull-left icon fa fa-globe" alt="Lorem Ipsum"></i>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                      <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                      <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                  </div>)} className="btn btn-outline-inverse btn-sm">read more</a></p>
                              </div>
                          </div>
                          <div className="item">
                              <div className="carousel-text-content">
                                  <i className="lazy pull-right icon fa fa-camera" alt="Lorem Ipsum"></i>
                                  <h2 className="title">Suspendisse molestie</h2>
                                  <p>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Duis dictum lorem metus.</p>
                                  <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-3">
                                      <h1>Suspendisse molestie</h1>
                                      <p><i className="lazy pull-left icon fa fa-globe" alt="Lorem Ipsum"></i>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                      <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                      <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                  </div>)} className="btn btn-outline-inverse btn-sm">read more</a></p>
                              </div>
                          </div>
                          <div className="item">
                              <div className="carousel-text-content">
                                  <i className="lazy pull-right icon fa fa-users" alt="Lorem Ipsum"></i>
                                  <h2 className="title">Maecenas id dolor</h2>
                                  <p>Fusce erat augue, fermentum sit amet congue a, ullamcorper ac enim. Maecenas id dolor imperdiet, mollis felis ut, pellentesque ante. Sed id congue arcu. Nulla eget commodo sem. Suspendisse suscipit, sem ac.</p>
                                  <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-4">
                                      <h1>Maecenas id dolor</h1>
                                      <p><i className="lazy pull-left icon fa fa-globe" alt="Lorem Ipsum"></i>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                      <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                      <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                  </div>)} className="btn btn-outline-inverse btn-sm">read more</a></p>
                              </div>
                          </div>

                          <div className="item">
                              <div className="carousel-text-content">
                                  <i className="lazy pull-right icon fa fa-image" alt="Lorem Ipsum"></i>
                                  <h2 className="title">Sed scelerisque</h2>
                                  <p>Aenean a est fringilla, malesuada eros vel, condimentum augue. Sed lorem sapien, vestibulum quis nisl volutpat, fermentum adipiscing massa. Cras ac faucibus nisl. Proin ac convallis sapien. </p>
                                  <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-5">
                                      <h1>Sed scelerisque</h1>
                                      <p><i className="lazy pull-left icon fa fa-globe" alt="Lorem Ipsum"></i>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                      <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                      <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                  </div>)} className="btn btn-outline-inverse btn-sm">read more</a></p>
                              </div>
                          </div>
                      </div>
                      <a className="left fa fa-chevron-left carousel-control" href="#features-carousel" data-slide="prev"><i></i></a>
                      <a className="right fa fa-chevron-right carousel-control" href="#features-carousel" data-slide="next"><i></i></a>
                  </div>
              </div>
          </article>
      );
  }
}

export default Carrousel;
