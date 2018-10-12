import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

import nanoid from 'nanoid';


class App extends Component {
    state = {
        items: [],
    };

    add = ({ name = 'New Item', items = [] }) => {
        const newItem = this.createItem(name, items);

        this.setState({ 
            items: [...this.state.items, newItem],
        });
    };

    remove = () => {
        return false;
    };

    update = () => {
        return false;
    };

    renderItems = items => items.map(props => <Item { ...props } />);

    createItem = (name = 'New Item', items = []) => {
        const guid = nanoid();

        return {
            name,
            add: this.add,
            remove: this.remove,
            items,
            key: guid,
            renderItems: this.renderItems,
        };
    };

    render() {
        const { items } = this.state;
        const itemsHtml = !!items.length && this.renderItems(items);

        return (
            <div className="App">
                <div
                    onClick={ this.add }
                    className="App__button"
                >
                    Add item
                </div>
                { itemsHtml }
            </div>
        );
    };
}

export default App;
