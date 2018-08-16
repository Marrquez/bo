import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import './Home.css';
import LeftSidebar from '../left-sidebar/LeftSidebar';
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var config = {
    apiKey: "AIzaSyAD39gNSpD7ka5R8guPVeCvLoNfO_8DSMY",
    authDomain: "booo-745d1.firebaseapp.com",
    databaseURL: "https://booo-745d1.firebaseio.com",
    projectId: "booo-745d1",
    storageBucket: "booo-745d1.appspot.com",
    messagingSenderId: "357600474405"
};
firebase.initializeApp(config);

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            user: {email: '', logged:false, data:{}},
            modalContent: null
        }
    }
    componentDidMount(){ }
    componentWillMount(){
        var self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let newData ={
                    email: user.email,
                    logged: true,
                    data: user
                };
                self.setState({user:newData});
                /*firebase.database().ref('users/' + user.uid).on('value', function(snapshot){
                    user.email = snapshot.val() ? snapshot.val().email : "";

                });*/
            } else {
                let newData = {
                    email:'',
                    logged:false,
                    data: {}
                };
                self.setState({user:newData});
            }
        });
    }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    signInUser(params){
        firebase.auth().createUserWithEmailAndPassword(params.email, params.pswd).then(function(){
            console.log("El usuario se registró");
        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            console.log("El usuario NO se registró");
        });
    }
    signOutUser(params){
        firebase.auth().signOut().then(function() {

        }).catch(function(error) {
            // An error happened.
        });
    }
    logInUser(params){
        var self = this;
        firebase.auth().signInWithEmailAndPassword(params.email, params.pswd).then(function(){

        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            self.notify("Usuario y/o contraseña inválidos");
        });
    }
    updateUser(email){
        var database = firebase.database();
        let userId = this.state.user.data.uid;

        database.ref('users/' + userId).set({
            email: email
        }).then(function(){
            console.log("updated!");
        });
    }
    logUser(provider, providerType){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            //var token = result.credential.accessToken;
            //var secret = result.credential.secret;
            // The signed-in user info.
            //var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // The email of the user's account used.
            //var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            //var credential = error.credential;
            // ...
        });
    }
    recoverByEmail(email){
        var self = this;
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(email).then(function() {
            self.notify("Ha sido enviado un email a: " + email + " con instrucciones para la recuperación de tu contraseña");
        }).catch(function(error) {
            self.notify("Ha ocurrido un error al tratar de recuperar tu contraseña");
            // An error happened.
        });
    }
    notify(msg){
        toast(msg);
    }
    showModal(content){
        this.setState({modalContent: content});
    }
  render() {
    return ( <div id="outer-container">
        <LeftSidebar></LeftSidebar>
        <section id="main-content" className="clearfix">
            <article id="intro" className="section-wrapper clearfix">
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
            <article id="text" className="section-wrapper clearfix">
                <div className="content-wrapper clearfix">
                    <div className="col-sm-10 col-md-9 pull-right">
                        <h1 className="section-title">Text Content</h1>
                        <p className="feature-paragraph">
                            <i className="lazy pull-right icon fa fa-globe" alt="Lorem Ipsum"></i>
                            Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. <a href="#carousel">Suspendisse molestie lorem odio</a>, sit amet. Laoreet consequat. Duis dictum lorem metus, vitae dapibus.</p>
                        <h4>Duis dictum lorem metus</h4>
                        <p>Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.</p>
                        <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-1">
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
            <article id="carousel" className="section-wrapper clearfix">
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
                                    <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-2">
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
                                    <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-3">
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
                                    <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-4">
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
                                    <p><a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-5">
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
            <article id="grid" className="section-wrapper clearfix">
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
            <article id="featured" className="section-wrapper clearfix">
                <div className="content-wrapper clearfix">
                    <div className="col-sm-11 pull-right">
                        <h1 className="section-title">Featured</h1>
                        <section className="feature-columns row clearfix">
                            <article className="feature-col col-md-6">
                                <a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-7">
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
                                <a data-toggle="modal" data-target="#common-modal" onClick={() => this.showModal(<div className="content-to-populate-in-modal" id="modal-content-8">
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
            <article id="tabs" className="section-wrapper clearfix">
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
            <article id="contact" className="section-wrapper clearfix">
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
        </section>
        <Footer
            user={this.state.user}
            logInUser={this.logInUser.bind(this)}
            signInUser={this.signInUser.bind(this)}
            signOutUser={this.signOutUser.bind(this)}
            updateUser={this.updateUser.bind(this)}
            recoverByEmail={this.recoverByEmail.bind(this)}>
        </Footer>
        <ToastContainer />
        <div className="modal fade" id="common-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div className="modal-body clearfix">
                        {this.state.modalContent}
                    </div>
                </div>
            </div>
        </div>
    </div>);
  }
}

export default Home;