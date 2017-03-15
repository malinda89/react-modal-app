import React, { Component } from 'react';
import ReactModal from'react-modal';
import './Modal.css';

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.saveCard = this.saveCard.bind(this);
  }
  
  saveCard(e) {
    e.preventDefault();

    const data = {
      title: this.title.value,
      description: this.description.value,
      selectItem: this.selectItem.value
    }

    this.props.updateCard(data);
  }

  render() {
    return (
      <div>
        <ReactModal isOpen={this.props.isOpen} contentLabel="Minimal Modal Example" className="content" overlayClassName="overlay">
          
          <form onSubmit={(e) => this.saveCard(e)}>
            <div className="form-group">
              <label>Title</label>
              <input ref={(input) => this.title = input} type="text" className="form-control" placeholder="Title"/>
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <input ref={(input) => this.description = input} type="text" className="form-control" placeholder="Description"/>
            </div>
            
            <div className="form-group">
              <label>Select Item</label>
              <select ref={(input) => this.selectItem = input} className="form-control">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </select>
            </div>
            
            <div>
              <button className="pull-right btn btn-success" type="submit">Save</button>
            </div>
          </form> 

          <button className="pull-right btn btn-success" onClick={() => this.props.triggerModal(false)}>Close</button>
        </ReactModal>
      </div>
    );
  }
}


    
