import React, { Component } from 'react';
import './LeftSidebar.css';

class LeftSidebar extends Component {
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
          <section id="left-sidebar">
              <div className="logo">
                  <a href="#intro" className="link-scroll"><img src="assets/images/other_images/logo.png" alt="Twilli Air" /></a>
              </div>
              <div id="mobile-menu-icon" className="visible-xs"><span className="glyphicon glyphicon-th"></span></div>
              {/* <div id="mobile-menu-icon" className="visible-xs"  onClick="toggle_main_menu();" ><span className="glyphicon glyphicon-th"></span></div> */}
              <ul id="main-menu">
                  <li id="menu-item-text" className="menu-item scroll"><a href="#text">Text</a></li>
                  <li id="menu-item-carousel" className="menu-item scroll"><a href="#carousel">Carousel</a></li>
                  <li id="menu-item-grid" className="menu-item scroll"><a href="#grid">Grid</a></li>
                  <li id="menu-item-featured" className="menu-item scroll"><a href="#featured">Featured</a></li>
                  <li id="menu-item-tabs" className="menu-item scroll"><a href="#tabs">Tabs</a></li>
                  <li id="menu-item-contact" className="menu-item scroll"><a href="#contact">Contact</a></li>
              </ul>
          </section>
      );
  }
}

export default LeftSidebar;
