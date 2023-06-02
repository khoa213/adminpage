import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: '12:00', uv: 55, pv: 2400, amt: 2400},{name: '1:00', uv: 40, pv: 2400, amt: 2400},{name: '2:00', uv: 40, pv: 2400, amt: 2400},
{name: '3:00', uv: 40, pv: 2400, amt: 2400},{name: '4:00', uv: 50, pv: 2400, amt: 2400},{name: '5:00', uv: 62, pv: 2400, amt: 2400},
{name: '6:00', uv: 75, pv: 2400, amt: 2400},{name: '7:00', uv: 85, pv: 2400, amt: 2400},{name: '8:00', uv: 35, pv: 2400, amt: 2400},
{name: '9:00', uv: 63, pv: 2400, amt: 2400},{name: '10:00', uv: 39, pv: 2400, amt: 2400},{name: '11:00', uv: 41, pv: 2400, amt: 2400}];
const DrawLineChart = () => {
    return <>
    <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </>
};
export { DrawLineChart};