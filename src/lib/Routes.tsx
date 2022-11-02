import { createBrowserRouter } from "react-router-dom";
import AboutPages from "../Pages/About.pages";
import ContactPages from "../Pages/Contact.pages";
import ExamplePage from "../Pages/Example.pages";
import MainPages from "../Pages/Main.pages";
import ResumePages from "../Pages/Resume.pages";
import WelcomePages from "../Pages/Welcome.pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainPages />,
    children: [
      { path: "/examples", element: <ExamplePage /> },
      { path: "/resume", element: <ResumePages /> },
      { path: "/about-me", element: <AboutPages /> },
      { path: "/contact", element: <ContactPages /> },
      { path: "", element: <WelcomePages /> },
    ],
  },
]);
