import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.css';

import logo from './folder.svg';
import addIcon from './add.svg';
import removeIcon from './remove.svg';

class Item extends PureComponent {
    static defaultProps = {
        items: [],
        name: 'New Item',
    };

    static propTypes = {
        items: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        add: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
    };

    render() {
        const {
            add,
            remove,
            name,
            items,
            renderItems,
            isOpened,
        } = this.props;
    
        const itemsHtml = items.length && renderItems(items);
        const showItems = !!items.length && isOpened;
    
        return <div className="Item">
            <div className="Item__info">
                <div className="Item__icon">
                    <img
                        src={ logo }
                        alt="Node"
                    />
                </div>
                <div className="Item__name">
                    { name }
                </div>
                <div className="Item__buttons">
                    <Button
                        title="Add"
                        onClick={ add }
                        icon={ addIcon }
                    />
                    <Button
                        title="Remove"
                        onClick={ remove }
                        icon={ removeIcon }
                    />
                </div>
            </div>
            { showItems && <div className="Item__list">
                { itemsHtml }
            </div> }
        </div>;
    };
};

export default Item;
