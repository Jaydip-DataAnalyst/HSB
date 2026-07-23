
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"
import SearchResults from "./components/shared/SearchResults"
import Places from "./pages/Places"
import PlacesDetails from "./pages/PlacesDetails"
import Profile from "./pages/Profile"
import SelectTicket from "./pages/TicketLayout"
import TicketLayout from "../src/pages/TicketLayout"
import Booking from "../src/pages/Booking"
function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<SearchResults />} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/places" element={<Places/>} />
            <Route path="/places/:placeId" element={<PlacesDetails/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/booking" element={<TicketLayout/>}/>
            <Route path="/booking/payment" element={<Booking/>}/>
          </Routes>
          
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
