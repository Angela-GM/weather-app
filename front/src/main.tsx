import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(

    <QueryClientProvider client={client}>
      <main>
        {/* <ReactQueryDevtools /> */}
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>

);
