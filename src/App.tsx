import React from "react";
import PublicRouter from "Pages/public";
const App: React.FC = () => {
  const isLogin = false;
  if (isLogin) return <>로그인 중</>;
  return <PublicRouter />;
};

export default App;
