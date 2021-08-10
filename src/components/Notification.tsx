import { useSelector } from "react-redux";
import { notificationSelector } from "../selectors/index";

const Notification = () => {
  const { message, notiType } = useSelector(notificationSelector);

  if (message === "") return null;

  const style = {
    color: notiType === "error" ? "red" : "green",
    background: "lightgrey",
    fontSize: "12px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "5px",
  };

  return <div style={style}>{message}</div>;
};

export default Notification;
