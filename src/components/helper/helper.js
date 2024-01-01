import { rightTableData, rightTableTotal } from "../../constants/constants.js";

export const calculatePercentage = (metric) => {
  const totalValue = rightTableTotal[metric];
  const colors = ["#ff823c", "#0096ff", "#323c46"];

    const dataWithPercentage = rightTableData.map((item, index) => ({
      id: index,
      value: parseFloat(((item[metric] / totalValue) * 100).toFixed(2)),
      label: item.Group,
      color: colors[index]
    }));

  return dataWithPercentage;
};
