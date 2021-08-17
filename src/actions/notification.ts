const doShowNotification = (
  notiType: "error" | "success",
  message: string,
) => ({
  type: "SHOW",
  data: { message, notiType },
});

const doClearNotifcation = () => ({
  type: "CLEAR",
});

let prevNotificationId: null | NodeJS.Timeout;
export const startSetNotification = (
  notiType: "error" | "success",
  message: string,
  seconds = 5,
) => {
  return async (dispatch: any) => {
    if (prevNotificationId) clearTimeout(prevNotificationId);
    dispatch(doShowNotification(notiType, message));
    prevNotificationId = setTimeout(() => {
      dispatch(doClearNotifcation());
    }, seconds * 1000);
  };
};
