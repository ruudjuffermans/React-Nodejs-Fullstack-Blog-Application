import { useContext } from "react";
import { AuthContext } from ".";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext can only be used inside the context provider");
  }

  return context;
};

export default useAuthContext;
