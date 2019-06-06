import React, { lazy, Suspense } from "react";

import { Fallback } from "./Fallback"; 

const Login = lazy(() => import("./LogInDefault")); 
const fallback = <Fallback />;

const LazyLogInPage =  () => {
  return (
    <Suspense fallback={fallback}>
      <Login/> 
    </Suspense>
  );
};

export { LazyLogInPage };
