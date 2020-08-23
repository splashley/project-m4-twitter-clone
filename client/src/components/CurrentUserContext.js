import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch("/api/me/profile", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log("User being set as" + data);
        setStatus("idle");
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
