import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import './Home.css';
import LeftSidebar from '../left-sidebar/LeftSidebar';
import Footer from '../footer/Footer';
import Index from '../index/Index';
import Text from '../text/Text';
import Carrousel from '../carrousel/Carrousel';
import Grid from '../grid/Grid';
import Feature from '../feature/Feature';
import Tabs from '../tabs/Tabs';
import Contact from '../contact/Contact';
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
                    email: '',
                    logged: false,
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
            <Index user={this.state.user}></Index>
            <Text showModal={this.showModal.bind(this)}></Text>
            <Carrousel showModal={this.showModal.bind(this)}></Carrousel>
            <Grid></Grid>
            <Feature showModal={this.showModal.bind(this)}></Feature>
            <Tabs></Tabs>
            <Contact></Contact>
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