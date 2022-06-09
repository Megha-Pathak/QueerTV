import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CombinedProvider } from "./frontend/provider";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoriesProvider,
  FiltersProvider,
  HistoryProvider,
  LikesProvider,
  SidebarProvider,
  VideosProvider,
  WatchLaterProvider,
} from "../src/frontend/contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <VideosProvider>
            <CategoriesProvider>
              <FiltersProvider>
                <LikesProvider>
                  <WatchLaterProvider>
                    <HistoryProvider>
                      <App />
                    </HistoryProvider>
                  </WatchLaterProvider>
                </LikesProvider>
              </FiltersProvider>
            </CategoriesProvider>
          </VideosProvider>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
