import * as React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="w-full h-full bg-blue flex">
			<App />
		</div>
	</React.StrictMode>,
);
