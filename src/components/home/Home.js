import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div id="outer-container">
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
            <section id="main-content" className="clearfix">
                <article id="intro" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg5.jpg" >
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
                <article id="text" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg1.jpg">
                    <div className="content-wrapper clearfix">
                        <div className="col-sm-10 col-md-9 pull-right">
                            <h1 className="section-title">Text Content</h1>
                            <p className="feature-paragraph"><img data-img-src="assets/images/other_images/transp-image5b.png" className="lazy pull-right" alt="Lorem Ipsum" />Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="#carousel">Suspendisse molestie lorem odio</a>, sit amet. Laoreet consequat. Duis dictum lorem metus, vitae dapibus.</p>
                            <h4>Duis dictum lorem metus</h4>
                            <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.</p>
                            <p><a href="" className="btn btn-outline-inverse btn-sm">read more</a></p>
                            {/*<p><a href="" onclick="populate_and_open_modal(event, 'modal-content-1');" className="btn btn-outline-inverse btn-sm">read more</a></p>*/}
                            <div className="content-to-populate-in-modal" id="modal-content-1">
                                <h1>Lorem Ipsum</h1>
                                <p><img data-img-src="assets/images/other_images/transp-image4.png" className="lazy rounded_border hover_effect pull-right" alt="Lorem Ipsum" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna vel ante mollis tincidunt. Donec nec magna condimentum tortor laoreet lobortis. Nunc accumsan sapien eu tortor fringilla, et condimentum metus pellentesque. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem. Quisque consectetur nisi eu felis euismod, sit amet faucibus justo molestie. Ut pretium sapien dui, id facilisis metus interdum pharetra.</p>
                                <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Ut luctus faucibus viverra. Quisque ut ante eget libero rutrum imperdiet. Morbi in diam bibendum, venenatis arcu sed, consequat libero. Nulla imperdiet, ipsum et adipiscing pulvinar, nibh metus porta mauris, et vestibulum dolor sapien sit amet justo. In dignissim leo nec erat faucibus volutpat.</p>
                                <h3>Duis dictum lorem metus, vitae dapibus</h3>
                                <p><img data-img-src="assets/images/other_images/transp-image3.png" className="lazy rounded_border hover_effect pull-left" alt="Lorem Ipsum" />Sed auctor urna mi, sed fringilla felis vulputate nec. Cras eu nibh id quam pretium convallis. Donec ante enim, placerat nec sagittis sit amet, tempor in velit. Maecenas ultricies commodo lacus id porta. Suspendisse eros elit, lacinia vitae erat vitae, egestas accumsan nunc. Maecenas dictum odio ipsum, non volutpat erat consequat tempor. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui feugiat molestie sit amet eget purus. Morbi eget neque nec lectus tempus sagittis nec at ante. </p>
                                <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Ut luctus faucibus viverra. Quisque ut ante eget libero rutrum imperdiet. Morbi in diam bibendum, venenatis arcu sed, consequat libero. Nulla imperdiet, ipsum et adipiscing pulvinar, nibh metus porta mauris, et vestibulum dolor sapien sit amet justo. In dignissim leo nec erat faucibus volutpat.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article id="carousel" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg6.jpg">
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
                                        <img src="assets/images/other_images/transp-image1.png" className="icon" alt="Lorem Ipsum" />
                                        <h2 className="title">Lorem Ipsum</h2>
                                        <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio.</p>
                                        <p><a href="" className="btn btn-outline-inverse btn-sm">read more</a></p>
                                        {/*<p><a href="" onClick="populate_and_open_modal(event, 'modal-content-2');" className="btn btn-outline-inverse btn-sm">read more</a></p>*/}
                                        <div className="content-to-populate-in-modal" id="modal-content-2">
                                            <h1>Lorem Ipsum</h1>
                                            <p><img data-img-src="assets/images/other_images/transp-image1.png" className="lazy rounded_border hover_effect pull-left" alt="Lorem Ipsum" />Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                            <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                            <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="carousel-text-content">
                                        <img src="assets/images/other_images/transp-image6.png" className="icon" alt="Lorem Ipsum" />
                                        <h2 className="title">Suspendisse molestie</h2>
                                        <p>Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Duis dictum lorem metus.</p>
                                        <p><a href="" className="btn btn-outline-inverse btn-sm">read more</a></p>
                                        {/*<p><a href="" onclick="populate_and_open_modal(event, 'modal-content-3');" className="btn btn-outline-inverse btn-sm">read more</a></p>*/}
                                        <div className="content-to-populate-in-modal" id="modal-content-3">
                                            <h1>Suspendisse molestie</h1>
                                            <p><img data-img-src="assets/images/other_images/transp-image6.png" className="lazy rounded_border hover_effect pull-left" alt="Lorem Ipsum" />Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                            <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                            <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="carousel-text-content">
                                        <img src="assets/images/other_images/transp-image7.png" className="icon" alt="Lorem Ipsum" />
                                            <h2 className="title">Maecenas id dolor</h2>
                                            <p>Fusce erat augue, fermentum sit amet congue a, ullamcorper ac enim. Maecenas id dolor imperdiet, mollis felis ut, pellentesque ante. Sed id congue arcu. Nulla eget commodo sem. Suspendisse suscipit, sem ac.</p>
                                            <p><a href="" className="btn btn-outline-inverse btn-sm">read more</a></p>
                                            {/*<p><a href="" onclick="populate_and_open_modal(event, 'modal-content-4');" className="btn btn-outline-inverse btn-sm">read more</a></p>*/}

                                            <div className="content-to-populate-in-modal" id="modal-content-4">
                                                <h1>Maecenas id dolor</h1>
                                                <p><img data-img-src="assets/images/other_images/transp-image7.png" className="lazy rounded_border hover_effect pull-left" alt="Lorem Ipsum" />Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                                <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                                <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                            </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="carousel-text-content">
                                        <img src="assets/images/other_images/transp-image4.png" className="icon" alt="Lorem Ipsum" />
                                            <h2 className="title">Sed scelerisque</h2>
                                            <p>Aenean a est fringilla, malesuada eros vel, condimentum augue. Sed lorem sapien, vestibulum quis nisl volutpat, fermentum adipiscing massa. Cras ac faucibus nisl. Proin ac convallis sapien. </p>
                                            <p><a href="" className="btn btn-outline-inverse btn-sm">read more</a></p>
                                            {/*<p><a href="" onclick="populate_and_open_modal(event, 'modal-content-5');" className="btn btn-outline-inverse btn-sm">read more</a></p>*/}
                                            <div className="content-to-populate-in-modal" id="modal-content-5">
                                                <h1>Sed scelerisque</h1>
                                                <p><img data-img-src="assets/images/other_images/transp-image4.png" className="lazy rounded_border hover_effect pull-left" alt="Lorem Ipsum" />Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="">Suspendisse molestie lorem odio</a>, sit amet. </p>
                                                <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                                <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                            </div>
                                    </div>
                                </div>

                            </div>


                            <a className="left carousel-control" href="#features-carousel" data-slide="prev"></a>
                            <a className="right carousel-control" href="#features-carousel" data-slide="next"></a>

                        </div>

                    </div>
                </article>

                <article id="grid" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg2.jpg">
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

                <article id="featured" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg3.jpg">
                    <div className="content-wrapper clearfix">
                        <div className="col-sm-11 pull-right">

                            <h1 className="section-title">Featured</h1>


                            <section className="feature-columns row clearfix">


                                <article className="feature-col col-md-4">
                                    <a href="" className="thumbnail linked">
                                        {/*<a href="" onclick="populate_and_open_modal(event, 'modal-content-6');" className="thumbnail linked">*/}
                                        <div className="image-container">
                                            <img data-img-src="assets/images/other_images/project-3.jpg" className="lazy item-thumbnail" alt="Lorem Ipsum" />
                                        </div>
                                        <div className="caption">
                                            <h5>Image Carousel</h5>
                                            <p>This feature contains an image carousel when you open popup.</p>
                                        </div>
                                    </a>

                                    <div className="content-to-populate-in-modal" id="modal-content-6">
                                        <h1>Sed scelerisque</h1>
                                        <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Etiam at ligula sit amet arcu laoreet consequat.<br/></p>


                                        <div id="unique-id-for-image-slider" className="owl-carousel popup-image-gallery">

                                            <div>

                                                <h6 className="caption">Caption for Image 1</h6>
                                                <img className="lazyOwl" data-src="assets/images/other_images/bg1.jpg" />
                                            </div>

                                            <div>
                                                <h6 className="caption">Caption for Image 2</h6>
                                                <img className="lazyOwl" data-src="assets/images/other_images/bg2.jpg" />
                                            </div>

                                            <div>
                                                <h6 className="caption">Caption for Image 3</h6>
                                                <img className="lazyOwl" data-src="assets/images/other_images/bg3.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className="feature-col col-md-4">
                                    <a href="" className="thumbnail linked">
                                        {/*<a href="" onclick="populate_and_open_modal(event, 'modal-content-7');" className="thumbnail linked">*/}
                                        <div className="image-container">
                                            <img data-img-src="assets/images/other_images/project-2.jpg" className="lazy item-thumbnail" alt="Lorem Ipsum" />
                                        </div>
                                        <div className="caption">
                                            <h5>Text popup</h5>
                                            <p>This feature contains generic image and text content when you open popup.</p>
                                        </div>
                                    </a>

                                    <div className="content-to-populate-in-modal" id="modal-content-7">
                                        <img data-img-src="assets/images/other_images/top-image2.jpg" className="lazy full-width" alt="Lorem Ipsum" />
                                            <h1>Sed scelerisque</h1>
                                            <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet. </p>
                                        <p>Laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet.</p>
                                        <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio test.</p>
                                    </div>
                                </article>


                                <article className="feature-col col-md-4">
                                    <a href="" className="thumbnail linked">
                                        {/*<a href="" onclick="populate_and_open_modal(event, 'modal-content-8', '', 'full-size');" className="thumbnail linked">*/}
                                        <div className="image-container">
                                            <img data-img-src="assets/images/other_images/project-4.jpg" className="lazy item-thumbnail" alt="Lorem Ipsum" />
                                        </div>
                                        <div className="caption">
                                            <h5>Alternate Gallery</h5>
                                            <p>Inside this feature's popup you'll find an alternative version of an image gallery.</p>
                                        </div>
                                    </a>

                                    <div className="content-to-populate-in-modal" id="modal-content-8">
                                        <h1>Sed scelerisque</h1>
                                        <p>Nullam ac rhoncus. Aliquam adipiscing eros non elit imperdiet congue. Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet. Adipiscing eros non elit imperdiet congue tiam at ligula sit amet arcu.</p>


                                    <div id="unique-id-for-alt-image-slider" className="owl-carousel popup-alt-image-gallery">
                                        <div className="item"><a href="assets/images/other_images/bg1.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-1.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg2.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-2.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg3.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-3.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg4.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-4.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg5.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-5.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg6.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-6.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg2.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-2.jpg" /></a></div>
                                        <div className="item"><a href="assets/images/other_images/bg3.jpg" data-lightbox="popup-alt-gallery"><img className="lazyOwl" data-src="assets/images/other_images/gallery-thumb-3.jpg" /></a></div>
                                    </div>
                        </div>
                </article>

            </section>



        </div>
  </div>
  </article>

      <article id="tabs" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg7.jpg">
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
                              <img src="assets/images/other_images/tabs-icon4.png" className="pull-right hidden-xs" />
                                  <h4>Donec nec magna condimentum</h4>
                                  <p>Uspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.</p>
                                  <p>Ut pretium sapien dui, id facilisis metus interdum pharetra. Totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                          </div>

                          <div role="tabpanel" className="tab-pane fade" id="tabs-tab2">
                              <img src="assets/images/other_images/tabs-icon3.png" className="pull-right hidden-xs" />
                                  <h4>Maecenas rhoncus tortor nec mi congue</h4>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio.</p>
                          </div>

                          <div role="tabpanel" className="tab-pane fade" id="tabs-tab3">
                              <img src="assets/images/other_images/tabs-icon2.png" className="pull-right hidden-xs" />
                                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                  <p>Nunc accumsan sapien eu tortor fringilla, et condimentum metus pellentesque. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem. Quisque consectetur nisi eu felis euismod, sit amet faucibus justo molestie. Ut pretium sapien dui, id facilisis metus interdum pharetra.</p>
                          </div>

                          <div role="tabpanel" className="tab-pane fade" id="tabs-tab4">
                              <img src="assets/images/other_images/tabs-icon1.png" className="pull-right hidden-xs" />
                                  <h4>Quisque consectetur nisi</h4>
                                  <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem.</p>
                                  <p>Integer eu turpis scelerisque, iaculis magna non.</p>
                          </div>

                      </div>

                  </div>

              </div>
          </div>
      </article>

      <article id="contact" className="section-wrapper clearfix" data-custom-background-img="assets/images/other_images/bg4.jpg">
          <div className="content-wrapper clearfix">

              <h1 className="section-title">Contact</h1>


              <div className="contact-details col-sm-5 col-md-3">
                  <p>123A,<br/>Molestie Lorem Avenue,<br/>Aliquam<br/>AAA0010</p>
                  <p>Tel: (+20) 21 301 524</p>
                  <p><a href="mailto:info@loremipsum.com">info@loremipsum.com</a></p>
              </div>



              <div className="col-sm-7 col-md-9">

                  <form className="form-style validate-form clearfix" action="assets/php/mail.php" method="POST" role="form">


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
                          <div className="form-group text-right">
                              <img id="form-captcha-img" src="assets/php/form_captcha/captcha_img.php" />
                                  <input type="text" className="text-field form-control validate-field required" data-validation-type="captcha" id="form-captcha" placeholder="Enter text" name="captcha" />
                                      <span id="form-captcha-refresh" className="fa fa-refresh" title="Reload"></span>
                          </div>
                      </div>


                      <div className="col-md-6">
                          <div className="form-group">
                              <textarea placeholder="Message..." className="form-control validate-field required" name="message"></textarea>
                          </div>
                          <div className="form-group">
                              <img src="assets/images/theme_images/loader-form.GIF" className="form-loader" />
                                  <button type="submit" className="btn btn-sm btn-outline-inverse">Submit</button>
                          </div>
                          <div className="form-group form-general-error-container"></div>
                      </div>

                  </form>
              </div>

          </div>
      </article>

  </section>


      <section id="footer">


          <div id="go-to-top"><span className="icon glyphicon glyphicon-chevron-up"></span></div>
          {/*<div id="go-to-top" onclick="scroll_to_top();"><span className="icon glyphicon glyphicon-chevron-up"></span></div>*/}

          <ul className="social-icons">
              <li><a href="" target="_blank" title="Facebook"><img src="assets/images/theme_images/social_icons/facebook.png" alt="Facebook" /></a></li>
              <li><a href="" target="_blank" title="Twitter"><img src="assets/images/theme_images/social_icons/twitter.png" alt="Twitter" /></a></li>
              <li><a href="" target="_blank" title="Google+"><img src="assets/images/theme_images/social_icons/googleplus.png" alt="Google+" /></a></li>
          </ul>


          <div className="footer-text-line">&copy; 2014 Twilli | Air</div>
      </section>


  </div>
    );
  }
}

export default Home;
