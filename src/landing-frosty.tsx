import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { FrostyLanding } from "@/landing/FrostyLanding"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FrostyLanding />
  </StrictMode>,
)
