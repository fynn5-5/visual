import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { Legal } from "@/legal/Legal"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Legal />
  </StrictMode>,
)
