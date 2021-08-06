function saveUser(user: { username: string; password: string; token: string }) {
  window.localStorage.setItem("loggedUser", JSON.stringify(user));
}

function removeUser() {
  window.localStorage.removeItem("loggedUser");
}

function loadUser(): IUserWithToken | null {
  const loggedUserJson = window.localStorage.getItem("loggedUser");
  if (loggedUserJson) {
    return JSON.parse(loggedUserJson);
  }
  return null;
}

const storageUtils = {
  saveUser,
  removeUser,
  loadUser,
};

export default storageUtils;
