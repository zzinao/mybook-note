import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

//connectedrouter 오류
interface AppProps {
  history: History;
}

function App({ history }: AppProps) {
  const props = {
    history: history,
  };
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter {...props}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
