import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
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
          <article id="grid" className="Grid section-wrapper clearfix">
              <div className="content-wrapper clearfix">
                  <div className="col-sm-11 col-md-10 pull-right">
                      <h1 className="section-title">Grid</h1>
                      <section className="grid row clearfix clearfix-for-2cols">
                          <div className="grid-item col-md-6">
                              <div className="item-content clearfix">
                                  <span className="icon fa fa-area-chart"></span>
                                  <div className="text-content">
                                      <h5>Lorem ipsum dolor sit amet</h5>
                                      <p>Nullam ac rhoncus sapien, non gravida purus. Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="grid-item col-md-6">
                              <div className="item-content clearfix">
                                  <span className="icon fa fa-globe"></span>
                                  <div className="text-content">
                                      <h5>Aliquam adipiscing eros non elit</h5>
                                      <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed ligula eget tempus.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="grid-item col-md-6">
                              <div className="item-content clearfix">
                                  <span className="icon fa fa-certificate"></span>
                                  <div className="text-content">
                                      <h5>Integer ultricies sed ligula</h5>
                                      <p>Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies sed ligula ligula eget.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="grid-item col-md-6">
                              <div className="item-content clearfix">
                                  <span className="icon fa fa-cloud"></span>
                                  <div className="text-content">
                                      <h5>Lorem ipsum dolor sit amet</h5>
                                      <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies sed ligula eget tempus.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </article>
      );
  }
}

export default Grid;
