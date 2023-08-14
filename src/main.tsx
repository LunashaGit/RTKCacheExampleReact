import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./RTK/store.ts";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CardPage } from "./pages/CardPage";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cards">
              <Route path=":cardId" element={<CardPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
