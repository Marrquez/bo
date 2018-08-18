import React, { Component } from 'react';
import './Index.css';

class Index extends Component {
    constructor(props) {
        super();
        this.state = {
            title: 'Say more with less with TWILLI Air',
            description: 'TWILLI Air is a fully-responsive, minimalistic HTML template, designed to be ideal for websites with concise content.',
            button: 'find out more',
            modifyTitle: false,
            modifyDescription: false,
            modifyButton: false
        }
    }
    componentDidMount(){ }
    componentWillMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.user.pageData.index.title,
            description: nextProps.user.pageData.index.description,
            button: nextProps.user.pageData.index.button
        });
    }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    handleElement(e){
        switch(e){
            case 'title':
                this.setState({modifyTitle:true});
                break;
            case 'desc':
                this.setState({modifyDescription:true});
                break;
            case 'button':
                this.setState({modifyButton:true});
                break;
            default:
                this.setState({modifyTitle:true});
                break;
        }
    }
    setElementValue(e){
        switch(e){
            case 'title':
                this.setState({modifyTitle:false});
                break;
            case 'desc':
                this.setState({modifyDescription:false});
                break;
            case 'button':
                this.setState({modifyButton:false});
                break;
            default:
                this.setState({modifyTitle:false});
                break;
        }
    }
    handleKeyPress(e){
        if(e.key === 'Enter'){
            e.target.blur()
        }
    }
    setTitulo(e){
        this.setState({title:e.target.value});
    }
    setDescription(e){
        this.setState({description:e.target.value});
    }
    setButton(e){
        this.setState({button:e.target.value});
    }
    savePageData(){
        var data = {
            'title': this.state.title,
            'description': this.state.description,
            'button': this.state.button
        };
        this.props.savePageData('index', data);
    }
  render() {
        var title = <h1 onClick={() => this.handleElement('title')}>{this.state.title}</h1>;
        var description = <p onClick={() => this.handleElement('desc')}>{this.state.description}</p>;
        var button = <div><a onClick={() => this.handleElement('button')} className="link-scroll btn btn-outline-inverse btn-lg">{this.state.button}</a></div>;
        var editClass = "content-wrapper clearfix wow fadeInDown";
        var saveButton = null;

        if(this.props.user.logged){
            editClass = "content-wrapper clearfix wow fadeInDown edit-mode";
            saveButton = <i onClick={this.savePageData.bind(this)} className="fa fa-save"></i>;
            if(this.state.modifyTitle){
                title = <input type="text"
                               className="text-field form-control validate-field required"
                               data-validation-type="text"
                               id="form-email2"
                               name="title"
                               placeholder=""
                               value={this.state.title}
                               onBlur={() => this.setElementValue('title')}
                               onKeyPress={this.handleKeyPress.bind(this)}
                               onChange={this.setTitulo.bind(this)}
                               autoFocus />;
            }

            if(this.state.modifyDescription){
                description = <div>
                    <input type="text"
                           className="text-field form-control validate-field required"
                           data-validation-type="text"
                           id="form-email2"
                           name="description"
                           placeholder=""
                           value={this.state.description}
                           onBlur={() => this.setElementValue('desc')}
                           onKeyPress={this.handleKeyPress.bind(this)}
                           onChange={this.setDescription.bind(this)}
                           autoFocus /><br />
                </div>;
            }

            if(this.state.modifyButton){
                button = <input type="text"
                               className="text-field form-control validate-field required"
                               data-validation-type="text"
                               id="form-email2"
                               name="button"
                               placeholder=""
                               value={this.state.button}
                               onBlur={() => this.setElementValue('button')}
                               onKeyPress={this.handleKeyPress.bind(this)}
                               onChange={this.setButton.bind(this)}
                               autoFocus />;
            }
        }else{
            button = <p><a href="#text" className="link-scroll btn btn-outline-inverse btn-lg">{this.state.button}</a></p>;
        }
      return (
          <article id="intro" className="Index section-wrapper clearfix">
              <div className={editClass} data-wow-delay="0.3s">
                  {saveButton}
                  <div className="col-sm-10 col-md-9 pull-right">
                      <section className="feature-text">
                          {title}
                          {description}
                          {button}
                      </section>
                  </div>
              </div>
          </article>
      );
  }
}

export default Index;
