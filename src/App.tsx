import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import Appshell from "./component/Appshell";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import Preview from "./pages/preview";
import SettingsPage from "./pages/settings";
import { QueryClient, QueryClientProvider } from 'react-query'
function App() {
  const queryClient = new QueryClient()
  return (
    <EuiProvider colorMode="dark">
      <BrowserRouter>

        <Appshell>
        <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
        </QueryClientProvider>

        </Appshell>
      </BrowserRouter>
    </EuiProvider>
  );
}

export default App;
