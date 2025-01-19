import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




function StudentsData() {

    const [students, setstudents] = useState([]);



    useEffect(() => {

        const getStudents = async () => {
            try {

                const response = await axios.get('http://localhost:8081/Students')
                setstudents(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("unable to get data", error)
            }


        };

        getStudents();
    }, []);


    const deleteStudent = async (id) =>{
        try {
            
            await axios.delete(`http://localhost:8081/Students/${id}`);
        setstudents(students.filter(student=> student.id !==id));

        } catch (error) {
            console.log("unable to delete student", error);
            
        }

        
    }




    return (
        <div>
            <div className="container table-container">
            <h2 className="text-center"><strong>STUDENT DETAILS</strong> </h2>
                <table className="table">
              
                    <thead className="table-dark">


                        <tr>
                            <th>NAME </th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>DEPARTMENT </th>
                            <th>MAIL ID</th>
                            <th>PHONE NUMBER</th>
                            <th>CITY</th>
                            <th>MODIFY</th>

                        </tr>
                    </thead>

                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.studentName}</td>
                                <td>{student.studentAge}</td>
                                <td>{student.studentGen}</td>
                                <td>{student.studentDept}</td>
                                <td>{student.studentEmail}</td>
                                <td>{student.studentPhone}</td>
                                <td>{student.studentAddress}</td>


                                <td className="text-center">
                <Link to={`/edit/${student.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <button onClick={() => deleteStudent(student.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
                            </tr>
                        ))}

                    </tbody>


                </table>

            </div>

        </div>
    )
}

export default StudentsData;