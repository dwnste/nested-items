import React, { Component } from 'react';
import './NestedItems.css';
import Item from '../Item/Item';

import { guid } from '../../helpers';

export default class NestedItems extends Component {
    state = {
        items: this.props.items
    }

    handleChanges = (value, guid) => {
        console.log(value, guid);
    }

    createItem = (name = 'new item') => {
        return {
            guid: guid(),
            name,
            items: []
        }
    }

    render() {
        return <div className="NestedItems">
            { this.state.items.map((item, index) => <Item
                name={item.name}
                items={item.items}
                key={index}
                guid={item.guid}
                onChange={(value) => this.handleChanges(value, item.guid)}
                createItem={this.createItem}
            />) }
        </div>
    }
}