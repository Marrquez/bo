import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
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
          <article id="contact" className="Contact section-wrapper clearfix">
              <div className="content-wrapper clearfix">
                  <h1 className="section-title">Contact</h1>
                  <div className="contact-details col-sm-5 col-md-3">
                      <p>123A,<br/>Molestie Lorem Avenue,<br/>Aliquam<br/>AAA0010</p>
                      <p>Tel: (+20) 21 301 524</p>
                      <p><a href="mailto:info@loremipsum.com">info@loremipsum.com</a></p>
                  </div>
                  <div className="col-sm-7 col-md-9">
                      <form className="form-style validate-form clearfix" action="assets/php/mail.php" method="POST">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <input type="text" className="text-field form-control validate-field required" data-validation-type="string" id="form-name" placeholder="Full Name" name="name" />
                              </div>
                              <div className="form-group">
                                  <input type="email" className="text-field form-control validate-field required" data-validation-type="email" id="form-email" placeholder="Email Address" name="email" />
                              </div>
                              <div className="form-group">
                                  <input type="tel" className="text-field form-control validate-field phone" data-validation-type="phone" id="form-contact-number" placeholder="Contact Number" name="contact_number" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <textarea placeholder="Message..." className="form-control validate-field required" name="message"></textarea>
                              </div>
                              <div className="form-group">
                                  <img src="assets/images/theme_images/loader-form.GIF" alt="" className="form-loader" />
                                  <button type="submit" className="btn btn-sm btn-outline-inverse">Submit</button>
                              </div>
                              <div className="form-group form-general-error-container"></div>
                          </div>
                      </form>
                  </div>
              </div>
          </article>
      );
  }
}

export default Contact;
