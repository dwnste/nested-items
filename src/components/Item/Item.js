import React, { Component } from 'react';
import './Item.css';
import logo from './folder.svg';

import { guid } from '../../helpers';

export default class Item extends Component {
    state = {
        showItems: false,
        items: this.props.items
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ showItems: !this.state.showItems });
    }

    handleAddItem = (e, name = 'new item') => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            items: [...this.state.items, {
                name,
                guid: guid(),
                items: []
            }],
            showItems: true
        });
    }

    handleDeleteItem = (e, guid) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            items: this.state.items.filter(item => item.guid !== guid)
        });
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
                    onClick={(e) => this.handleAddItem(e)}
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
                { this.state.items.map((item, index) => <Item
                    name={item.name}
                    items={item.items}
                    guid={item.guid}
                    key={index}
                    handleDeleteItem={this.handleDeleteItem}
                />) }
            </div> : null }
        </div>
    }
}
