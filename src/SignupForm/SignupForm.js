import React, {Component} from 'react';
import {Row, Input, Autocomplete, Collection, CollectionItem, Col, Button} from 'react-materialize';
import './SignupForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      iKnowInput: '',
      iWantInput: '',
      iKnowList: [],
      iWantList: [],
    }
  }

  onChange = (e) => {
    const {value, id} = e.target;
    console.log(console.log(value, 'val', id, 'id'));
    this.setState({[id]: value});
  }

  selectIknow = (val) => {
    this.setState((prevState) => {
      return {
        iKnowInput: '',
        iKnowList: [
          ...prevState.iKnowList,
          val
        ]
      }
    });
  }

  selectIWant = (val) => {
    this.setState((prevState) => {
      return {
        iWantInput: '',
        iWantList: [
          ...prevState.iWantList,
          val
        ]
      }
    });
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      iKnowInput,
      iWantInput,
      iKnowList,
      iWantList
    } = this.state;
    return (
      <Row className="signup-ctn">

        <Col s={12} className="signup-form">

          <Row className="signup-form-row">
            <Input placeholder="Username" s={5} label="Username" value={username} onChange={this.onChange} id="username"/>
            <Input placeholder="Email" type="email" label="Email" s={5} value={email} onChange={this.onChange} id="email"/>
          </Row>
          <Row className="signup-form-row">
            <Input placeholder="Password" type="password" label="Password" s={5} value={password} onChange={this.onChange} id="password"/>
            <Input placeholder="Confirm Password" type="password" label="Confirm Password" s={5} value={confirmPassword} onChange={this.onChange} id="confirmPassword"/>
          </Row>

          <Row className="signup-form-row">
            <Autocomplete
              title='What I know'
              id='iKnowInput'
              className="auto-input"
              data={{
                'React': null,
                'Redux': null,
                'Angular': null,
                'Vue': null
              }}
              onAutocomplete={(val) => this.selectIknow(val)}
              value={iKnowInput}
              onChange={this.onChange}
            />

            <Autocomplete
              title='What I want to learn'
              id='iWantInput'
              className="auto-input"
              data={{
                'React': null,
                'Redux': null,
                'Angular': null,
                'Vue': null
              }}
              onAutocomplete={(val) => this.selectIWant(val)}
              value={iWantInput}
              onChange={this.onChange}
            />
          </Row>
          <Row className="signup-form-row">
            <Col s={5}>
              <Collection header="I can teach:">
                {iKnowList.map((item) => <CollectionItem>{item}</CollectionItem>)}
              </Collection>
            </Col>
            <Col s={5}>
              <Collection className={"Collection"} header="I want to learn:">
                {iWantList.map((item) => <CollectionItem>{item}</CollectionItem>)}
              </Collection>
            </Col>
          </Row>

          <Button waves='light' className="signup-btn">Signup</Button>

        </Col>
      </Row>
    );
  }
}

export default SignupForm;
