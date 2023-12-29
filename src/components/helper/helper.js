import { rightTableData, rightTableTotal } from "../../constants/constants.js";

export const calculatePercentage = (metric) => {
  const totalValue = rightTableTotal[metric];

    const dataWithPercentage = rightTableData.map((item, index) => ({
      id: index,
      value: parseFloat(((item[metric] / totalValue) * 100).toFixed(2)),
      label: item.Group,
    }));

  return dataWithPercentage;
};
