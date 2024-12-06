import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { CategoryProvider } from "./provider/CategoryProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <CategoryProvider>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{
              width: "auto",
            }}
            toastStyle={{
              backgroundColor: "#323232",
              color: "#fff",
            }}
            progressStyle={{
              backgroundColor: "#fff",
            }}
          />
          <RouterProvider router={router}></RouterProvider>
        </CategoryProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
