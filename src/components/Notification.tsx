import { useSelector } from "react-redux";

const Notification = () => {
  const { message, notiType } = useSelector(
    (state) => (state as any).notification,
  );

  if (message === "") return null;

  return <div className={notiType}>{message}</div>;
};

export default Notification;
