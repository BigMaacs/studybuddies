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

        <Col s={8} className="signup-form">

          <Row>
            <Input placeholder="Username" s={4} label="Username" value={username} onChange={this.onChange} id="username"/>
            <Input placeholder="Email" type="email" label="Email" s={4} value={email} onChange={this.onChange} id="email"/>
          </Row>
          <Row>
            <Input placeholder="Password" type="password" label="Password" s={4} value={password} onChange={this.onChange} id="password"/>
            <Input placeholder="Confirm Password" type="password" label="Confirm Password" s={4} value={confirmPassword} onChange={this.onChange} id="confirmPassword"/>
          </Row>

          <Row>
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
          <Row>
            <Col s={4}>
              <Collection header="I can teach">
                {iKnowList.map((item) => <CollectionItem>{item}</CollectionItem>)}
              </Collection>
            </Col>
            <Col s={4}>
              <Collection header="I want to learn">
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
