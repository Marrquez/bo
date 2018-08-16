import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
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
          <article id="tabs" className="Tabs section-wrapper clearfix">
              <div className="content-wrapper mid-vertical-positioning clearfix">
                  <div className="col-sm-10 col-md-9 pull-right">
                      <h1 className="section-title">Tabs</h1>
                      <div className="tabpanel styled-tabs uniform-height" role="tabpanel">
                          <ul className="nav nav-tabs" role="tablist" text-hidden-xs="true">
                              <li role="presentation" className="active"><a href="#tabs-tab1" aria-controls="tabs-tab1" role="tab" data-toggle="tab"><i className="icon fa fa-diamond"></i><span>Donec</span></a></li>
                              <li role="presentation"><a href="#tabs-tab2" aria-controls="tabs-tab2" role="tab" data-toggle="tab"><i className="icon fa fa-train"></i><span>Maecenas</span></a></li>
                              <li role="presentation"><a href="#tabs-tab3" aria-controls="tabs-tab3" role="tab" data-toggle="tab"><i className="icon fa fa-coffee"></i><span>Iaculis</span></a></li>
                              <li role="presentation"><a href="#tabs-tab4" aria-controls="tabs-tab4" role="tab" data-toggle="tab"><i className="icon fa fa-comment"></i><span>Quisque</span></a></li>
                          </ul>
                          <div className="tab-content">
                              <div role="tabpanel" className="tab-pane fade in active" id="tabs-tab1">
                                  <i alt="" className="pull-right hidden-xs fa fa-book" />
                                  <h4>Donec nec magna condimentum</h4>
                                  <p>Uspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.</p>
                                  <p>Ut pretium sapien dui, id facilisis metus interdum pharetra. Totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="tabs-tab2">
                                  <i alt="" className="pull-right hidden-xs fa fa-car" />
                                  <h4>Maecenas rhoncus tortor nec mi congue</h4>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio.</p>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="tabs-tab3">
                                  <i alt="" className="pull-right hidden-xs fa fa-cube" />
                                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                  <p>Nunc accumsan sapien eu tortor fringilla, et condimentum metus pellentesque. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem. Quisque consectetur nisi eu felis euismod, sit amet faucibus justo molestie. Ut pretium sapien dui, id facilisis metus interdum pharetra.</p>
                              </div>
                              <div role="tabpanel" className="tab-pane fade" id="tabs-tab4">
                                  <i alt="" className="pull-right hidden-xs fa fa-list" />
                                  <h4>Quisque consectetur nisi</h4>
                                  <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem.</p>
                                  <p>Integer eu turpis scelerisque, iaculis magna non.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </article>
      );
  }
}

export default Tabs;
