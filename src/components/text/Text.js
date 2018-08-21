import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
    constructor(props) {
        super();
        this.state = {
            title: 'Text Content',
            subtitle: 'Duis dictum lorem metus',
            description1: 'Etiam at ligula sit amet arcu laoreet consequat. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio, sit amet. Laoreet consequat. Duis dictum lorem metus, vitae dapibus.',
            description2: 'Suspendisse molestie lorem odio, sit amet. Duis dictum lorem metus, vitae dapibus risus imperdiet nec. Suspendisse molestie lorem odio. Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo. Pellentesque sed malesuada turpis. Quisque eget lacus sit amet dui.',
            image: 'fa-globe',
            button: 'Read more',
            modifyTitle: false,
            modifySubtitle: false,
            modifyDescription1: false,
            modifyDescription2: false,
            modifyImage: false,
            modifyButton: false
        }
    }
    componentDidMount(){ }
    componentWillMount(){ }
    componentWillUnmount() { }
    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.user.pageData.text.title,
            subtitle: nextProps.user.pageData.text.subtitle,
            description1: nextProps.user.pageData.text.description1,
            description2: nextProps.user.pageData.text.description2,
            button: nextProps.user.pageData.text.button,
            image: nextProps.user.pageData.text.image
        });
    }
    componentWillUpdate(nextProps, nextState){ }
    componentDidUpdate(prevProps, prevState){ }
    handleElement(e){
        switch(e){
            case 'title':
                this.setState({modifyTitle:true});
                break;
            case 'subtitle':
                this.setState({modifySubtitle:true});
                break;
            case 'description1':
                this.setState({modifyDescription1:true});
                break;
            case 'description2':
                this.setState({modifyDescription2:true});
                break;
            case 'button':
                this.setState({modifyButton:true});
                break;
            case 'image':
                this.setState({modifyImage:true});
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
            case 'subtitle':
                this.setState({modifySubtitle:false});
                break;
            case 'description1':
                this.setState({modifyDescription1:false});
                break;
            case 'description2':
                this.setState({modifyDescription2:false});
                break;
            case 'image':
                this.setState({modifyImage:false});
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
    setSubtitle(e){
        this.setState({subtitle:e.target.value});
    }
    setDescription1(e){
        this.setState({description1:e.target.value});
    }
    setDescription2(e){
        this.setState({description2:e.target.value});
    }
    setButton(e){
        this.setState({button:e.target.value});
    }
    setImage(e){
        this.setState({image:e.target.value});
    }
    savePageData(){
        var data = {
            'title': this.state.title,
            'subtitle': this.state.subtitle,
            'description1': this.state.description1,
            'description2': this.state.description2,
            'button': this.state.button,
            'image': this.state.image
        };
        this.props.savePageData('text', data);
    }
  render() {
      var title = <h1 onClick={() => this.handleElement('title')} className="section-title">{this.state.title}</h1>;
      var subtitle = <h4 onClick={() => this.handleElement('subtitle')}>{this.state.subtitle}</h4>;
      var description1 = <span onClick={() => this.handleElement('description1')}>{this.state.description1}</span>;
      var description2 = <p onClick={() => this.handleElement('description2')}>{this.state.description2}</p>;
      var image = <i onClick={() => this.handleElement('image')} className={'lazy pull-right icon fa ' + this.state.image} alt="Lorem Ipsum"></i>;
      var button = <span onClick={() => this.handleElement('button')}>{this.state.button}</span>;
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

          if(this.state.modifySubtitle){
              subtitle = <input type="text"
                             className="text-field form-control validate-field required"
                             data-validation-type="text"
                             id="form-email2"
                             name="title"
                             placeholder=""
                             value={this.state.subtitle}
                             onBlur={() => this.setElementValue('subtitle')}
                             onKeyPress={this.handleKeyPress.bind(this)}
                             onChange={this.setSubtitle.bind(this)}
                             autoFocus />;
          }

          if(this.state.modifyDescription1){
              description1 = <span>
                  <input type="text"
                         className="text-field form-control validate-field required"
                         data-validation-type="text"
                         id="form-email2"
                         name="description"
                         placeholder=""
                         value={this.state.description1}
                         onBlur={() => this.setElementValue('description1')}
                         onKeyPress={this.handleKeyPress.bind(this)}
                         onChange={this.setDescription1.bind(this)}
                         autoFocus /><br />
              </span>;
          }

          if(this.state.modifyDescription2){
              description2 = <span>
                  <input type="text"
                         className="text-field form-control validate-field required"
                         data-validation-type="text"
                         id="form-email2"
                         name="description"
                         placeholder=""
                         value={this.state.description2}
                         onBlur={() => this.setElementValue('description2')}
                         onKeyPress={this.handleKeyPress.bind(this)}
                         onChange={this.setDescription2.bind(this)}
                         autoFocus /><br />
              </span>;
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

          if(this.state.modifyImage){
              image = <input type="text"
                              className="text-field form-control validate-field required"
                              data-validation-type="text"
                              id="form-email2"
                              name="button"
                              placeholder=""
                              value={this.state.image}
                              onBlur={() => this.setElementValue('image')}
                              onKeyPress={this.handleKeyPress.bind(this)}
                              onChange={this.setImage.bind(this)}
                              autoFocus />;
          }
      }else{
          button = <span data-toggle="modal" data-target="#common-modal" onClick={() => this.props.showModal(<div className="content-to-populate-in-modal" id="modal-content-1">
              <h1>Lorem Ipsum</h1>
              <p><i className="lazy pull-right icon fa fa-globe" alt="Lorem Ipsum"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna vel ante mollis tincidunt. Donec nec magna condimentum tortor laoreet lobortis. Nunc accumsan sapien eu tortor fringilla, et condimentum metus pellentesque. Maecenas rhoncus tortor nec mi congue aliquet. Integer eu turpis scelerisque, iaculis magna non, tempor sem. Quisque consectetur nisi eu felis euismod, sit amet faucibus justo molestie. Ut pretium sapien dui, id facilisis metus interdum pharetra.</p>
              <p>Etiam scelerisque lacus tempor, rhoncus diam vel, gravida felis. Fusce tristique sem et leo aliquam vulputate. Ut eget orci in sapien commodo fringilla. Ut luctus faucibus viverra. Quisque ut ante eget libero rutrum imperdiet. Morbi in diam bibendum, venenatis arcu sed, consequat libero. Nulla imperdiet, ipsum et adipiscing pulvinar, nibh metus porta mauris, et vestibulum dolor sapien sit amet justo. In dignissim leo nec erat faucibus volutpat.</p>
          </div>)}>{this.state.button}</span>;
      }

      return (
          <article id="text" className="Text section-wrapper clearfix">
              <div className={editClass}>
                  {saveButton}
                  <div className="col-sm-10 col-md-9 pull-right">
                      {title}
                      <p className="feature-paragraph">
                          {image}
                          {description1}</p>
                      {subtitle}
                      {description2}
                      <p><a className="btn btn-outline-inverse btn-sm">{button}</a></p>
                  </div>
              </div>
          </article>
      );
  }
}

export default Text;
