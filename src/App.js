import React, { Component } from 'react';
import './App.css';
import NestedItems from './components/NestedItems/NestedItems';

import { guid } from './helpers';

const presetItems = [
  {
    guid: guid(),
    name: 'someitem1',
    items: [
      {
        guid: guid(),
        name: 'somenesteditem1',
        items: [
          {
            guid: guid(),
            name: 'somenesteditem3',
            items: [
              {
                guid: guid(),
                name: 'somenesteditem6',
                items: [
                  {
                    guid: guid(),
                    name: 'somenesteditem9',
                    items: [
                      {
                        guid: guid(),
                        name: 'somenesteditem13',
                        items: [
                          {
                            guid: guid(),
                            name: 'somenesteditem14',
                            items: []
                          },
                        ]
                      },
                    ]
                  },
                  {
                    guid: guid(),
                    name: 'somenesteditem10',
                    items: []
                  },
                  {
                    guid: guid(),
                    name: 'somenesteditem11',
                    items: []
                  },
                ]
              },
              {
                guid: guid(),
                name: 'somenesteditem7',
                items: []
              },
              {
                guid: guid(),
                name: 'somenesteditem8',
                items: []
              },
            ]
          },
          {
            guid: guid(),
            name: 'somenesteditem4',
            items: []
          },
          {
            guid: guid(),
            name: 'somenesteditem5',
            items: []
          },
        ]
      },
      {
        guid: guid(),
        name: 'somenesteditem2',
        items: []
      }
    ]
  },
  {
    guid: guid(),
    name: 'someitem2',
    items: []
  },
  {
    guid: guid(),
    name: 'someitem3',
    items: []
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NestedItems items={presetItems} />
      </div>
    );
  }
}

export default App;
