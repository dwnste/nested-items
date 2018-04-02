import React, { Component } from 'react';
import './NestedItems.css';
import Item from '../Item/Item';

export default class NestedItems extends Component {
    state = {
        items: this.props.items
    }

    handleChanges = (value, guid) => {
        console.log(value, guid);
    }

    render() {
        return <div className="NestedItems">
            { this.state.items.map((item, index) => <Item
                name={item.name}
                items={item.items}
                key={item.guid}
                guid={item.guid}
                onChange={(value) => this.handleChanges(value, index)}
            />) }
        </div>
    }
}