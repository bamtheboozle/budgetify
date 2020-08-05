import React, { useState, useEffect } from "react";

import Navigation from "./src/navigation/Navigation";
import AuthContext from "./src/contexts/AuthContext";
import { fetchAuthState } from "./src/storageHelpers/auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchAuthState().then((data) => {
      if (data !== null) {
        setIsAuthenticated(data.isAuthenticated);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <Navigation isAuthenticated={isAuthenticated} />
    </AuthContext.Provider>
  );
}
