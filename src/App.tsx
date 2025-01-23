import { Aside } from "./components/Aside"
import { ExpenseIndex } from "./views/ExpenseIndex"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="flex">
      <Aside />
      <ExpenseIndex />
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
