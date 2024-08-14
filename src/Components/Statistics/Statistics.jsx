import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cell, Pie, PieChart } from 'recharts';

const Statistics = () => {
    
    const lengthOfCard = useLoaderData();
    console.log(lengthOfCard.length);
    return (
        <div>
            <PieChart>

            <Pie>
            <Cell>


            </Cell>
            </Pie>

            </PieChart>


            

            

            <PieChart width={730} height={250}>
  <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
</PieChart>
        </div>
    );
};

Statistics.propTypes = {
    
};

export default Statistics;