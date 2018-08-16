import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
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
          <article id="featured" className="Feture section-wrapper clearfix">
              <div className="content-wrapper clearfix">
                  <div className="col-sm-11 pull-right">
                      <h1 className="section-title">Featured</h1>
                      <section className="feature-columns row clearfix">
                          <article className="feature-col col-md-6">
                              <a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-7">
                                  <img data-img-src="assets/images/other_images/top-image2.jpg" className="lazy full-width" alt="Lorem Ipsum" />
                                  <h1>Sed scelerisque</h1>
                                  <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet. </p>
                                  <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                  <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                              </div>)} className="thumbnail linked">
                                  <div className="image-container">
                                      <img data-img-src="assets/images/other_images/project-2.jpg" className="lazy item-thumbnail" alt="Lorem Ipsum" />
                                  </div>
                                  <div className="caption">
                                      <h5>Text popup</h5>
                                      <p>This feature contains generic image and text content when you open popup.</p>
                                  </div>
                              </a>

                          </article>
                          <article className="feature-col col-md-6">
                              <a data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-8">
                                  <h1>Sed scelerisque</h1>
                                  <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet. Adipiscing eros non elit imperdiet congue tiam at ligula sit amet arcu.</p>
                                  <div id="unique-id-for-alt-image-slider" className="owl-carousel popup-alt-image-gallery">
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-1.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-2.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-3.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-4.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-5.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-6.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-2.jpg" /></a></div>
                                      <div className="item"><a href="assets/images/other_images/project-4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" alt="" data-src="assets/images/other_images/gallery-thumb-3.jpg" /></a></div>
                                  </div>
                              </div>)} className="thumbnail linked">
                                  <div className="image-container">
                                      <img data-img-src="assets/images/other_images/project-4.jpg" className="lazy item-thumbnail" alt="Lorem Ipsum" />
                                  </div>
                                  <div className="caption">
                                      <h5>Alternate Gallery</h5>
                                      <p>Inside this feature's popup you'll find an alternative version of an image gallery.</p>
                                  </div>
                              </a>

                          </article>
                      </section>
                  </div>
              </div>
          </article>
      );
  }
}

export default Feature;
