import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  const mappedData = Object.keys(data).map(day => ({ name: day, value: data[day] }));
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={mappedData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip wrapperStyle={{ background: '#243b55' }} />
        <Area type="monotone" dataKey="value" stroke="#fff" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

Chart.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.array,
};

export default Chart;
