import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const animationConfig = { once: true, margin: "-100px" };
  return (
    <UserContext.Provider value={{ show, setShow, animationConfig }}>
      {children}
    </UserContext.Provider>
  );
};
