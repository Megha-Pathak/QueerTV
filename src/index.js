import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
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
import { PlaylistsProvider } from "./frontend/contexts/playlist-context";

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
                      <PlaylistsProvider>
                        <App />
                      </PlaylistsProvider>
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
