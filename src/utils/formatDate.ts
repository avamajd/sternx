import moment from "moment";

export const formatDate = (timestamp: number): string => {
  const today = moment();
  const date = moment(timestamp);

  if (!date.isValid()) {
    return "";
  }

  if (today.isSame(date, "day")) {
    return `Today @ ${date.format("HH:mm")}`;
  } else if (today.subtract(1, "day").isSame(date, "day")) {
    return `Yesterday @ ${date.format("HH:mm")}`;
  } else {
    return date.format("DD, MMM, YYYY @ HH:mm");
  }
};
