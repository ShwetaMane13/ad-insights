import { PieChart } from "@mui/x-charts/PieChart";
import LegendComponent from "./LegendItem";
import LegendItemComponent from "./LegendItem";

const DoughnutChart = (props) => {
  const { data } = props;
  const pieChartSize = 230;
  const pieChartMargin = { top: 35, left: 35, bottom: 0, right: 35 };
  const pieChartWidth =
    pieChartSize + pieChartMargin.left + pieChartMargin.right;
  const pieChartHeight =
    pieChartSize + pieChartMargin.top + pieChartMargin.bottom;

  return (
    <div className="doughnutchart">
      <div height={pieChartSize} style={{ flex: 1 }}>
        <PieChart
          colors={data.map((ele) => ele.color)}
          series={[
            {
              data: data,
              outerRadius: pieChartSize / 2,
              innerRadius: pieChartSize / 2 - 50,
              paddingAngle: 1.5,
            },
          ]}
          width={pieChartWidth}
          height={pieChartHeight}
          margin={pieChartMargin}
          legend={{ hidden: true }}
        />
      </div>
      <div className="doughnutchart-legend">
        {data.map((item) => {
          return (
            <LegendItemComponent
              key={item.label}
              color={item.color}
              label={`${item.value}% ${item.label}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DoughnutChart;
