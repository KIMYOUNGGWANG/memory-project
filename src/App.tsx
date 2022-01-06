import React from "react";
import { useQuery } from "react-query";
import { HomeView } from "Views";
function App() {
  const { data, isLoading } = useQuery(["user", "test"], () => {}, {
    enabled: false,
  });
  console.log(data, isLoading);
  return (
    <div className="App">
      <HomeView />
    </div>
  );
}

export default App;
