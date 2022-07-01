import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
