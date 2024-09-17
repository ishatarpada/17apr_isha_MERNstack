import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import store from "./redux/store"
import { Provider } from "react-redux"
import ShowData from "./Component/ShowData"
import AddData from "./Component/AddData"

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ShowData />} />
          <Route path="/add-user" element={<AddData />} />
        </Routes>
      </Router>
    </Provider>
  )
}
