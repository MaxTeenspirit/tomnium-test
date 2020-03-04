import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    const { valid, timestamp, base, rates } = this.props;

      return(
        <div className="Table">

          <div className="Table__row">
            <div className="Table__cell Table__cell_yellow">
              {`Valid`}
            </div>
            <div className="Table__cell Table__cell_yellow">
              {`${valid}`}
            </div>
          </div>

          <div className="Table__row">
            <div className="Table__cell Table__cell_yellow">
              {`Timestamp`}
            </div>
            <div className="Table__cell Table__cell_yellow">
              {`${timestamp}`}
            </div>
          </div>

          <div className="Table__row">
            <div className="Table__cell Table__cell_yellow">
              {`Base`}
            </div>
            <div className="Table__cell Table__cell_yellow">
              {`${base}`}
            </div>
          </div>

          <div className="Table__row Table__row_title">
            {`Rates`}
          </div>

          {
            Object.keys(rates).map((itemName, index) => (
              <div key={index} className="Table__row">
                <div className="Table__cell Table__cell_green">
                  {`${itemName}`}
                </div>
                <div className="Table__cell Table__cell_green">
                  {`${rates[itemName]}`}
                </div>
              </div>
            ))
          }

        </div>
      )
  }
}

export default Table;