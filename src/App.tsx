import './App.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { dataAPR, dataTVL, options } from './utils/dataset';
import Asset from './components/Asset';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='title'>
          Multifarm Demo
        </p>
        <Asset />
        <div className='charts'>
          <Line className='table' options={options('Asset APR (y)')} data={dataAPR} /> 
          <Line className='table' options={options('Asset TVL')} data={dataTVL} />
        </div>
      </header>
    </div>
  );
}

export default App;
