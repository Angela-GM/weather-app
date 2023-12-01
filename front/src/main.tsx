import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    
      <main className=" bg-gradient-to-r from-cyan-500 to-blue-500">
      <ReactQueryDevtools />
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  </React.StrictMode>
);
