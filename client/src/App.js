import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.png";

import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const styles = {
  width: "300",
  display: "block",
  margin: "auto",
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" style={styles} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
