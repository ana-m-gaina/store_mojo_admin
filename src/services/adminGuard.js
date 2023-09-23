const isAdmin = () => {
  const storageData = JSON.parse(localStorage.getItem("persist:root") ?? "{}");
  const currentUser = storageData.user ? JSON.parse(storageData.user) : null;
  const admin = currentUser?.currentUser?.isAdmin|| "";
  return admin;
};

export default isAdmin;
