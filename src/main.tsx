import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <BrowserRouter>
      <Providers>
          <App />
      </Providers>
    </BrowserRouter>
);
