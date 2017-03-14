import React, { Component } from 'react';
import './App.css';
import Modal from './Modal';

class Card extends Component {

  constructor () {
    super();

    this.updateCard = this.updateCard.bind(this);
    this.triggerModal = this.triggerModal.bind(this);

    this.state = {
      showModal: false,
      title: '',
      description: ''
    };
  }

  triggerModal(isVisible) {
    this.setState({
      showModal: isVisible
    });
  }

  updateCard(data) {
    this.triggerModal(false);

    this.setState({
      title: data.title,
      description: data.description
    });    
  }

  render() {
    return (
      <div>

        <div className="col-xs-4 card">
          <div className=""><button onClick={() => this.triggerModal(true)}>Edit Card</button></div>
          <div><p>{this.state.title}</p></div>
          <div><p>{this.state.description}</p></div>
        </div>

        <div>
          {
            this.state.showModal && 
            <Modal isOpen={this.state.showModal} triggerModal={this.triggerModal} updateCard={this.updateCard}/>
          }
        </div>

      </div>
    );
  }
}

export default Card;
