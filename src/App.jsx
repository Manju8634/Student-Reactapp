
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import StudentsData from './Components/StudentsData';
import { Route, Routes } from 'react-router-dom';
import StudentAdd from './Components/StudentAdd';
import StudentEdit from './Components/StudentEdit';


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">

      <Routes>
        <Route path="/" element={<StudentsData />} />
        <Route path="/add" element={<StudentAdd />} />
        <Route path="/edit/:Studentid" element={<StudentEdit/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
