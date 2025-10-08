import { toast } from "react-toastify";

// Load the installed apps list from localStorage

export const loadInstalledApps = () => {
  try {
    const data = localStorage.getItem("appList");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error loading appList:", err);
    return [];
  }
};

// Check if an app is already installed

export const isAppInstalled = (appId) => {
  const apps = loadInstalledApps();
  return apps.some((a) => a.id === appId);
};

// Add app to localStorage (Install)

export const installApp = (app) => {
  try {
    const apps = loadInstalledApps();
    // const alreadyInstalled = apps.some((a) => a.id === app.id);

    // if (alreadyInstalled) {
    //   toast.warning("App already installed!");
    //   return false;
    // }

    const updatedApps = [...apps, app];
    localStorage.setItem("appList", JSON.stringify(updatedApps));
    toast.success("App installed successfully!");
    return true;
  } catch (err) {
    console.error("Error installing app:", err);
    toast.error("Failed to install app.");
    return false;
  }
};

//  Remove an app (Uninstall)

export const uninstallApp = (appId) => {
  try {
    const apps = loadInstalledApps();
    const updatedApps = apps.filter((a) => a.id !== appId);
    localStorage.setItem("appList", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  } catch (err) {
    console.error("Error uninstalling app:", err);
    toast.error("Failed to uninstall app.");
  }
};
