import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
          <section id="footer">
              <form className="form-style validate-form clearfix">
                  <div className="col-md-12">
                      <div className="form-group">
                          <input type="text" className="text-field form-control validate-field required" data-validation-type="string" id="form-name" placeholder="Full Name" name="name" />
                      </div>
                      <div className="form-group">
                          <input type="email" className="text-field form-control validate-field required" data-validation-type="email" id="form-email" placeholder="Email Address" name="email" />
                      </div>
                      <div className="form-group text-right">
                          <div className="col-sm-12">
                              <button type="submit" className="btn btn-sm btn-outline-inverse">Submit</button>
                          </div>
                          <div className="col-sm-12">
                              <a>Recuperar contraseña</a><br />
                              <a>Registrarme</a>
                          </div>
                      </div>
                  </div>
              </form>
              <ul className="social-icons">
                  <li>
                      <a href="" target="_blank" title="Facebook">
                          <i className="fa fa-facebook" />
                      </a>
                  </li>
                  <li>
                      <a href="" target="_blank" title="Twitter">
                          <i className="fa fa-twitter" />
                      </a>
                  </li>
                  <li>
                      <a href="" target="_blank" title="Google+">
                          <i className="fa fa-user" />
                      </a>
                  </li>
              </ul>
              <div className="footer-text-line">&copy; 2018 Warrdnez | Co</div>
          </section>
      );
  }
}

export default Footer;
