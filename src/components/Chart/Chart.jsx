import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {

	let dataPointsValue=props.dataPoints.map(dataPoint => dataPoint.value);
	let maxValue=Math.max(...dataPointsValue);

	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
			<ChartBar 
				key={dataPoint.label}
				value={dataPoint.value} 
				maxValue={maxValue} 
				label={dataPoint.label} />))}
		</div>
	)
}

export default Chart;