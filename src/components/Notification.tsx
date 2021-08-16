import { useSelector } from "react-redux";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { notificationSelector } from "../selectors/index";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props}></MuiAlert>;
};

const Notification = () => {
  const { message, notiType } = useSelector(notificationSelector);

  if (message === "") return null;

  const style = {
    fontSize: "0.81rem",
  };

  return (
    <Alert severity={notiType} style={style}>
      {message}
    </Alert>
  );
};

export default Notification;
