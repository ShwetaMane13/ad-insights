import { PieChart } from "@mui/x-charts/PieChart";

const DoughnutChart = (props) => {
  const { data } = props;
  return (
    <>
      <section className="doughnutchart">
        <PieChart
          series={[
          {
              data: data,
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 2,
              cornerRadius: 2,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 150,
            },
          ]}
          width={500}
          height={300}
        />
      </section>
    </>
  );
};

export default DoughnutChart;
