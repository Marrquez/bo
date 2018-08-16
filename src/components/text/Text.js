import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
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
          <article id="text" className="Text section-wrapper clearfix">
              <div className="content-wrapper clearfix">
                  <div className="col-sm-10 col-md-9 pull-right">
                      <h1 className="section-title">Text Content</h1>
                      <p className="feature-paragraph">
                          <i className="lazy pull-right icon fa fa-globe" alt="Lorem Ipsum"></i>
                          Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="#carousel">Suspendisse molestie lorem odio</a>, sit amet. Laoreet consequat. Duis dictum lorem metus, vitae dapibus.</p>
                      <h4>Duis dictum lorem metus</h4>
                      <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.</p>
                      <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-1">
                          <h1>Lorem Ipsum</h1>
                          <p><i className="lazy pull-right icon fa fa-globe" alt="Lorem Ipsum"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna vel ante mollis tincidunt. Donec nec magna condimentum tortor laoreet lobortis. Nunc accumsan sapien eu tortor fringilla, et condimentum metus pellentesque. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem. Quisque consectetur nisi eu felis euismod, sit amet faucibus justo molestie. Ut pretium sapien dui, id facilisis metus interdum pharetra.</p>
                          <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Ut luctus faucibus viverra. Quisque ut ante eget libero rutrum imperdiet. Morbi in diam bibendum, venenatis arcu sed, consequat libero. Nulla imperdiet, ipsum et adipiscing pulvinar, nibh metus porta mauris, et vestibulum dolor sapien sit amet justo. In dignissim leo nec erat faucibus volutpat.</p>
                          <h3>Duis dictum lorem metus, vitae dapibus</h3>
                          <p><i className="lazy pull-left icon fa fa-globe" alt="Lorem Ipsum"></i>Sed auctor urna mi, sed fringilla felis vulputate nec. Cras eu nibh id quam pretium convallis. Donec ante enim, placerat nec sagittis sit amet, tempor in velit. Maecenas ultricies commodo lacus id porta. Suspendisse eros elit, lacinia vitae erat vitae, egestas accumsan nunc. Maecenas dictum odio ipsum, non volutpat erat consequat tempor. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui feugiat molestie sit amet eget purus. Morbi eget neque nec lectus tempus sagittis nec at ante. </p>
                          <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Ut luctus faucibus viverra. Quisque ut ante eget libero rutrum imperdiet. Morbi in diam bibendum, venenatis arcu sed, consequat libero. Nulla imperdiet, ipsum et adipiscing pulvinar, nibh metus porta mauris, et vestibulum dolor sapien sit amet justo. In dignissim leo nec erat faucibus volutpat.</p>
                      </div>)} className="btn btn-outline-inverse btn-sm">read more</a></p>
                  </div>
              </div>
          </article>
      );
  }
}

export default Text;
