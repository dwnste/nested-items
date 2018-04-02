import React, { Component } from 'react';
import './NestedItems.css';
import Item from '../Item/Item';

export default class NestedItems extends Component {
    render() {
        const { items } = this.props;

        return <div className="NestedItems">
            { items.map((item, index) => <Item name={item.name} items={item.items} key={index} />) }
        </div>
    }
}