import React, {Component} from 'react'; 
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    render(){
        return(
            <div className="chart">
                <Bar
                data={this.props.chartData}
                options={{ 
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities in Massachusetts',
                        fontSize : 25
                    },
                    legend : {
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    },
                    maintainAspectRatio: true
                }}
            />
            </div>
        )
    }
}
export default Chart;