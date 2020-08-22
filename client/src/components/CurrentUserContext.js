import React from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:31415/api/me/profile", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, [status]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
