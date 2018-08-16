import React, { Component } from 'react';
import './Footer.css';

/**
 * Show the current user info
 * */
class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            email: ''
        };
    }
    componentWillMount(){
        this.setState({email: this.props.user.email});
    }
    render(){
        return <div>
            Ingresaste como: {this.state.email}
            <br />
            <a onClick={this.props.signOutUser}>Salir</a>
        </div>;
    }
}

/**
 * Log the user in
 * */
class LoginForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            pswd: ''
        };
    }
    logInUser(e){
        e.preventDefault();
        this.props.logInUser({email:this.state.email, pswd:this.state.pswd});
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    setPswd(e){
        this.setState({pswd:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.logInUser.bind(this)}>
            <div className="col-md-12">
                <div className="form-group">
                    <input type="email"
                           className="text-field form-control validate-field required"
                           data-validation-type="email"
                           id="form-email2"
                           name="email"
                           placeholder="Correo"
                           value={this.state.email}
                           onChange={this.setEmail.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="password"
                           className="text-field form-control validate-field required"
                           data-validation-type="password"
                           id="form-password"
                           placeholder="Contraseña"
                           name="password"
                           value={this.state.pswd}
                           onChange={this.setPswd.bind(this)} />
                </div>
                <div className="form-group text-right">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-sm btn-outline-inverse">Entrar</button>
                    </div>
                </div>
            </div>
        </form>;
    }
}

class RecoverForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: ''
        };
    }
    recoverPswd(e){
        e.preventDefault();
        this.props.recoverByEmail(this.state.email);
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.recoverPswd.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="text-field form-control validate-field required"
                       id="exampleInputEmail2"
                       placeholder="Email address"
                       required
                       value={this.state.email}
                       onChange={this.setEmail.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-sm btn-outline-inverse">Recuperar</button>
                <button type="button" onClick={this.props.goBack} className="btn btn-sm btn-outline-inverse back">Cancelar</button>
            </div>
        </form>;
    }
}

class RegisterForm extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            pswd: ''
        };
    }
    signInUser(e){
        e.preventDefault();
        this.props.signInUser({email:this.state.email, pswd:this.state.pswd});
    }
    setEmail(e){
        this.setState({email:e.target.value});
    }
    setPswd(e){
        this.setState({pswd:e.target.value});
    }
    render(){
        return <form className="form-style validate-form clearfix" onSubmit={this.signInUser.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="text-field form-control validate-field required"
                       id="exampleInputEmail2"
                       placeholder="Email address"
                       required
                       value={this.state.email}
                       onChange={this.setEmail.bind(this)}
                />
            </div>
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                <input type="password"
                       className="text-field form-control validate-field required"
                       id="exampleInputPassword2"
                       placeholder="Password"
                       required
                       value={this.state.pswd}
                       onChange={this.setPswd.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-sm btn-outline-inverse">Registrarme</button>
                <button type="button" onClick={this.props.goBack} className="btn btn-sm btn-outline-inverse back">Cancelar</button>
            </div>
        </form>;
    }
}

class Footer extends Component {
    constructor(props) {
        super();
        this.state = {
            view: 'empty'
        }
    }
    componentDidMount(){ }
    componentWillMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){ }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    toggle(view){
        if(this.state.view === 'login'){
            this.setState({view:'empty'});
        }else{
            this.setState({view:view});
        }
    }
    navigate(view){
        this.setState({view:view});
    }
    signInUser(user){
        this.props.signInUser(user);
        this.navigate('login');
    }
    signOutUser(){
        this.props.signOutUser();
        this.navigate('login');
    }
  render() {
      var currentForm = null;

      if(this.props.user.logged){
        currentForm = <Profile user={this.props.user} signOutUser={this.signOutUser.bind(this)}></Profile>;
      }else if(this.state.view === 'login'){
        currentForm = <div>
            <LoginForm logInUser={this.props.logInUser}></LoginForm>
            <div className="col-sm-12">
                <a onClick={() => this.navigate("recover")} >Recuperar contraseña</a><br />
                <a onClick={() => this.navigate("signin")} >Registrarme</a>
            </div>
            <div className="col-sm-12"><br /></div>
        </div>;
      }else if(this.state.view === 'signin'){
          currentForm = <RegisterForm goBack={() => this.navigate("login")} signInUser={this.signInUser.bind(this)}></RegisterForm>;
      }else if(this.state.view === 'recover'){
          currentForm = <RecoverForm goBack={() => this.navigate("login")} recoverByEmail={this.props.recoverByEmail.bind(this)}></RecoverForm>;
      }
      return (
          <section id="footer">
              {currentForm}
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
                      <a onClick={() => this.toggle("login")}  target="_blank" title="Google+">
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
