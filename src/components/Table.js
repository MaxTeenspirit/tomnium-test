import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
        const state = this.props.state;
        return (
            <div className="Table">
                {
                    Object.keys(state).map((key, index) => (
                        typeof state[key] !== 'object'
                        ? <div key={index} className="Table__row">
                            <div className="Table__cell Table__cell_yellow">
                              {`${key}`}
                            </div>
                            <div className="Table__cell Table__cell_yellow">
                              {`${state[key]}`}
                            </div>
                          </div>
                        : 
                          <div>
                            {
                              Object.keys(state[key]).map((innerKey, index) => (
                                <div key={index} className="Table__row">
                                  <div className="Table__cell Table__cell_green">
                                    {`${innerKey}`}
                                  </div>
                                  <div className="Table__cell Table__cell_green">
                                    {`${state[key][innerKey]}`}
                                  </div>
                                </div>
                                )
                              )
                            }
                          </div>
                    ))
                }
            </div>
        )
    }
}

export default Table;