import Dashboard from "./pages/Dashboard"
import { Toaster } from "react-hot-toast";


function App() {
  

  return (
    <>
     <Toaster
        position="top-center" 
        toastOptions={{
          duration: 1500, 
          style: {
            minWidth: "300px",  
            fontSize: "18px",   
            padding: "16px 24px",
            borderRadius: "10px",
            background: "#1e293b", 
            color: "#fff",
          },
        }}
      />
      <Dashboard/>
    </>
  )
}

export default App
