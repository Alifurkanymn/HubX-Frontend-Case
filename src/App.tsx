import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";


export function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
