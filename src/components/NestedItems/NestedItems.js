import React, { Component } from 'react';
import './NestedItems.css';
import Item from '../Item/Item';

import { createItem } from '../../helpers';

export default class NestedItems extends Component {
    state = {
        items: this.props.items,
        inputValue: '',
    }

    handleChanges = (changedItem, index) => {
        const items = this.state.items.slice(0, index);

        if (changedItem) {
           items.push(changedItem);
        }

        items.push(...this.state.items.slice(index + 1));

        this.setState({
            items,
        });
    }

    addItem = (name = 'new item') => {
        this.setState({
            items: [
                ...this.state.items,
                createItem(name || 'new item'),
            ]
        })
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        return <div className="NestedItems">
            { this.state.items.map((item, index) => <Item
                name={item.name}
                items={item.items}
                key={item.guid}
                guid={item.guid}
                index={index}
                onChange={(value) => this.handleChanges(value, index)}
            />) }
            <div className="NestedItems__tools">
                <input
                    type="text" 
                    maxLength="16"
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                />
                <button onClick={() => this.addItem(this.state.inputValue)}>add</button>
            </div>
        </div>
    }
}