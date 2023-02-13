import React from "react";
import "./App.css";
// @ts-ignore
import RequestForm from "./pages/RequestForm/RequestForm.tsx";
// @ts-ignore
import ListRequests from "./pages/ListRequests/ListRequestsContainer.tsx";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/list-requests" element={
            <ListRequests
              // requestNumber={1}
              // date={new Date()}
              // clientName={"some-string"}
            />}
          />
          <Route path="/request-form" element={
            <RequestForm />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
