const initialNotification: NotificationState = {
  message: "",
  notiType: "error",
};

function notificationReducer(
  state: NotificationState = initialNotification,
  action: Action,
) {
  switch (action.type) {
    case "SHOW":
      return action.data;
    case "CLEAR":
      return initialNotification;
    default:
      return state;
  }
}

export default notificationReducer;
