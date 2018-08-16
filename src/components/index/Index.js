import React, { Component } from 'react';
import './Index.css';

class Index extends Component {
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
          <article id="intro" className="Index section-wrapper clearfix">
              <div className="content-wrapper clearfix wow fadeInDown" data-wow-delay="0.3s">
                  <div className="col-sm-10 col-md-9 pull-right">
                      <section className="feature-text">
                          <h1>Say more with less with TWILLI Air</h1>
                          <p>TWILLI Air is a fully-responsive, minimalistic HTML template, designed to be ideal for websites with concise content.</p>
                          <p><a href="#text" className="link-scroll btn btn-outline-inverse btn-lg">find out more</a></p>
                      </section>
                  </div>
              </div>
          </article>
      );
  }
}

export default Index;
