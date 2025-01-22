import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ExpenseIndex } from "./views/ExpenseIndex"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header />
      <ExpenseIndex />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
