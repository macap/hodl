import React, { Component } from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  render() {
    const width = (this.container.current) ? this.container.current.offsetWidth : 300;
    const { data } = this.props;
    const mappedData = Object.keys(data).map(day => ({ name: day, value: data[day] }));
    return (
      <div ref={this.container}>
        <AreaChart width={width} height={200} data={mappedData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#fff" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>
    );
  }
}

Chart.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.array,
};

export default Chart;
