import React, { Component } from 'react';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { name, number } = this.state;

    this.props.onSubmit(this.state);
    // this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.nameLabel}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label className={s.nameLabel}>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
