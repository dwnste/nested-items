import React, { Component } from 'react';
import './Item.css';
import logo from './folder.svg';

export default class Item extends Component {
    state = {
        showItems: false
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ showItems: !this.state.showItems });
    }

    render() {
        const { name, guid } = this.props;

        return <div className="Item">
            <div className="Item__element" onClick={this.handleClick}>
                <div className="Item__logo">
                    <img src={logo} alt="folder" className="Item__logo-image" />
                </div>
                <div className="Item__text">
                    { name }
                </div>
                <button
                    className="Item__button"
                    onClick={(e) => this.props.handleAddItem(e)}
                >
                    add
                </button>
                <button
                    className="Item__button"
                    onClick={(e) => this.props.handleDeleteItem(e, guid)}
                >
                    del
                </button>
            </div>
            { this.state.showItems ? <div className="Item__list">
                { this.props.items.map((item, index) => <Item
                    name={item.name}
                    items={item.items}
                    guid={item.guid}
                    key={index}
                    handleAddItem={this.props.handleAddItem}
                    handleDeleteItem={this.props.handleDeleteItem}
                />) }
            </div> : null }
        </div>
    }
}
