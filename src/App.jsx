import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import PageHome from "./routes/PageHome/pageHome"


function App() {
  return (
    <div className="layout"> 
    <div className="navbar">
    <Navbar />
    </div>
   <div className="content">
    <PageHome />
   </div>

    </div>
  )
}

export default App