import React, { Component } from 'react';
import './Graph.css';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
//import './LineGraph.js'

class Graph extends Component {

    constructor(props) {
        super(props);
        this.holder = React.createRef();
    }

    state = {
        width: 500,
        height: 400
    }

    componentDidMount() {
        this.setState({
            width: this.holder.current.clientWidth,
            height: this.holder.current.clientHeight
        });
    }


    resized = () => {
        console.log("something happenedd");
        console.log(this.holder.current);
        console.log(this.holder.current.clientWidth);
        console.log(this.holder.current.clientHeight);
        this.myRef = React.createRef();
        this.setState({
            width: this.holder.current.clientWidth,
            height: this.holder.current.clientHeight
        })
    }

    chart = () => {
        const data = [
            { name: 'Page A', uv: 0, pv: 0, amt: 0 },
            { name: 'Page B', uv: 1, pv: 8, amt: 0 },
            { name: 'Page C', uv: 2, pv: 0, amt: 0 },
            { name: 'Page D', uv: 3, pv: 8, amt: 0 },
            { name: 'Page E', uv: 0, pv: 0, amt: 1 },
            { name: 'Page F', uv: 0, pv: 0, amt: 0 },
            { name: 'Page G', uv: 0, pv: 8, amt: 0 },
        ];

        let height = this.state.height;
        let width = this.state.width;

        //data.map((elem)=>{return elem.name})
        return (
            <div>
                <LineChart
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    width={width * 0.8}
                    height={height * 0.8}
                    data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="uv" stroke="#808" />
                    <Line type="monotone" dataKey="pv" stroke="#088" />
                    <Line type="monotone" dataKey="amt" stroke="#880" />
                </LineChart>
            </div>

        )
    }


    render = () => {
        let actualChart = this.chart();
        console.log(this)
        return (
            <div ref={this.holder} onClick={(kissa) => this.resized()} className='GraphBoxStyle'>
                <div style={{margin: 20}} >So far totally unrelated Graph!</div>
                {actualChart}
            </div>
        )
    }

}
export default Graph;

