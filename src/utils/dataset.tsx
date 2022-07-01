
interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface DataTypes {
  labels: string[],
  datasets: Dataset[]
}

export const dataset = (number: number) => {
  const arr = [];
  let nr = number;
  for (let i = 1; i <= 12; i++) {
    nr = nr * 1.05;
    arr.push(Number(nr.toFixed(5)));
  }
  return arr;
};

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const dataAPR: DataTypes = {
  labels,
  datasets: [
    {
      label: '',
      data: dataset(150),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
export const dataTVL: DataTypes = {
  labels,
  datasets: [
    {
      label: '',
      data: dataset(120),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const options = (label: string) => ({
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: label,
    },
  },
})