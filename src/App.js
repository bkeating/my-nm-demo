import React from 'react';
import * as faker from "faker";

import genRandNum from './utils';
import FORM_FIELDS from './constants';

import { FormField, AddChildForm, ThankYouNM } from './components';

export default class App extends React.Component {

  state = {
    submitSuccess: undefined,
    id: genRandNum(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: '',
    isChild: false,
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.secondaryAddress(),
    addressCity: faker.address.city(),
    addressState: faker.address.state(),
    addressZip: faker.address.zipCode(),
    childList: [
      {
        id: genRandNum(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: '',
        dateOfBirth: '',
        isChild: true
      }
    ]
  }

  handleInput = (fieldName, val) => {
    this.setState({[fieldName]: val});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/submit', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res=>res.json())
      .then(res => (
        this.setState({ submitSuccess: res.success })
      ));
  }

  handleChildAdd = () => {
    this.setState(
      state => ({
        childList: state.childList.concat({
          id: genRandNum(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          gender: '',
          dateOfBirth: '',
          isChild: true
        })
      })
    );
  }

  handleChildRemove = (id) => {
    this.setState({
      childList: this.state.childList.filter(item => item.id !== id)
    });
  }

  handleChildInput = (id, fieldName, val) => {
    const items = this.state.childList.slice();
    const index = items.findIndex(x => x.id === id);
    items[index] = { ...items[index], [fieldName]: val };
    this.setState({ childList: items });
  }

  render() {
    return (
      <div className="app-wrapper">

        <span className="logo">
          <span className="logo-inner" />
        </span>

        <h1>My NM Demo App</h1>

        <ThankYouNM />

        {this.state.submitSuccess
          ? (
            <div className="success-msg">
              Your submission has been saved
              <button
                className="close"
                onClick={() => this.setState({ submitSuccess: undefined })}
              >
                Close
              </button>
            </div>
          )
          : (
            <div>
              {FORM_FIELDS.map(field => (
                <FormField
                  key={field.id}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={this.state[field.name]}
                  handleInput={this.handleInput}
                  options={field.options}
                  isChild
                />
              ))}

              <AddChildForm
                items={this.state.childList}
                handleAdd={this.handleChildAdd}
                handleRemove={this.handleChildRemove}
                handleInput={this.handleChildInput}
              />

              <button
                onClick={this.handleSubmit}
                className="submit"
              >
                Submit
              </button>

              <p>
                You can also <a href="/download">Download the CSV file</a>.
              </p>
            </div>
          )
        }

      </div>
    );
  }
}
