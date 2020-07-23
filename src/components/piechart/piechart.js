import React, { Component } from 'react';
import { RadialChart, FlexibleXYPlot } from 'react-vis';
import './piechart.css';

const myData = [
    {angle: 2, radius: 10, label: 'TOYS', subLabel: '30 %'}, {angle: 3, radius: 10, label: 'SAVINGS', subLabel: '50 %'}, {angle: 1, radius: 10, label: 'CANDY', subLabel: '20 %'}
  ];

class Piechart extends Component {
    render(){
        return(

            <RadialChart
              data={myData}
              width={300}
              height={300} 
              showLabels={true}
              showsubLabels={true}
              className="radial"
              /> 
              
        )
    }
}

export default Piechart;