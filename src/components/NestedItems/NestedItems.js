import React, { Component } from 'react';
import './NestedItems.css';
import Item from '../Item/Item';

import { guid } from '../../helpers';

export default class NestedItems extends Component {
    state = {
        items: this.props.items
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
        return <div className="NestedItems">
            { this.state.items.map((item, index) => <Item
                name={item.name}
                items={item.items}
                key={index}
                guid={item.guid}
                handleAddItem={this.handleAddItem}
                handleDeleteItem={this.handleDeleteItem}
            />) }
        </div>
    }
}