import React, { Component } from 'react';
import './Item.css';
import logo from './folder.svg';

import { createItem } from '../../helpers';

export default class Item extends Component {
    state = {
        showItems: false
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ showItems: !this.state.showItems });
    }

    onItemChange(index, changedItem) {
        const items = this.props.items.slice(0, index);
        
        if (changedItem) {
            items.push(changedItem);
        }

        items.push(...this.props.items.slice(index + 1));

        this.props.onChange({
            guid: this.props.guid,
            name: this.props.name,
            items,
        });
    }


    render() {
        const {
            name,
            guid,
            items,
            onChange,
        } = this.props;

        return <div className='Item'>
            <div className='Item__element' onClick={this.handleClick}>
                <div className='Item__logo'>
                    <img src={logo} alt='folder' className='Item__logo-image' />
                </div>
                <div className='Item__text'>
                    { name }
                </div>
                <button
                    className='Item__button'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({ showItems: true });
                        this.onItemChange(items.length, createItem('new item'))}
                    }
                >
                    add
                </button>
                <button
                    className='Item__button'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.props.onChange(null)}
                    }
                >
                    del
                </button>
            </div>
            { this.state.showItems ? <div className='Item__list'>
                { items.map((item, index) => <Item
                    name={item.name}
                    items={item.items}
                    guid={item.guid}
                    key={item.guid}
                    onChange={(changedItem) => this.onItemChange(index, changedItem)}
                />) }
            </div> : null }
        </div>
    }
}
