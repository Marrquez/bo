import React, { Component } from 'react';
import './Footer.css';

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
                        <button type="submit" className="btn btn-sm btn-outline-inverse">Submit</button>
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
        return <form className="form" onSubmit={this.recoverPswd.bind(this)} id="login-nav">
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail2"
                       placeholder="Email address"
                       required
                       value={this.state.email}
                       onChange={this.setEmail.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Recover password</button>
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
        return <form className="form" onSubmit={this.signInUser.bind(this)} id="login-nav">
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                <input type="email"
                       className="form-control"
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
                       className="form-control"
                       id="exampleInputPassword2"
                       placeholder="Password"
                       required
                       value={this.state.pswd}
                       onChange={this.setPswd.bind(this)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Register</button>
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
  render() {
      var currentForm = null;

      if(this.state.view === 'login'){
        currentForm = <div>
            <LoginForm
                signIn={this.navigate.bind(this)}
                recoverPswd={this.navigate.bind(this)}
            ></LoginForm>
            <div className="col-sm-12">
                <a onClick={() => this.navigate("recover")} >Recuperar contraseña</a><br />
                <a onClick={() => this.navigate("signin")} >Registrarme</a>
            </div>
            <div className="col-sm-12"><br /></div>
        </div>;
      }else if(this.state.view === 'signin'){
          currentForm = <h1>Registrarse</h1>;
      }else if(this.state.view === 'recover'){
          currentForm = <h1>Recuperar</h1>;
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
