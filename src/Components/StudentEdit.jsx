import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function StudentEdit() {

  const [student,setstudent]= useState({

    studentName: '',
    studentAge: '',
    studentDept: '',
    studentGen: '',
    studentEmail: '',
    studentPhone: '',
    studentAddress: ''
  })
 
    const navigate = useNavigate();
    const { Studentid } = useParams();

    useEffect(()=>{

      const getStudent = async ()=>{

        try {
         const response = await axios.get(`http://localhost:8081/Students/${Studentid}`);
          setstudent(response.data);
          console.log(Studentid);
          
        } catch (error) {
          console.log('unable to get ', error);
         
         }
        }
   getStudent();


    },[Studentid,navigate]);


    const handleChange = (e)=>{

      setstudent({
        ...student,
        [e.target.name]:e.target.value
      })

    }


    const handleSubmit = async (e) => {
     
     e.preventDefault();
      try {
        await axios.put(`http://localhost:8081/Students/${Studentid}`, student)

        navigate('/')
      } catch (error) {
        console.log('unable to update ' ,error)
        
      }

    }
    
    



 
    return (
    <div>


<div class="container mt-5">
    <h2 class="mb-4"> <strong>EDIT STUDENT</strong></h2>
    <form onSubmit={handleSubmit}> 
      <div class="mb-3">
        <label  class="form-label">Full Name</label>
        <input type="text" name='studentName' value={student.studentName} onChange={handleChange} class="form-control" id="fullName"  required placeholder="Enter your full name"/>

      </div>


      <div class="mb-3">
        <label class="form-label"> Age</label>
        <input type="number" name='studentAge' value={student.studentAge} onChange={handleChange} class="form-control" required id="age" placeholder="Enter your Age"/>
      </div>


      <div class="mb-3">
        <label  class="form-label">Gender</label>
        <select class="form-select" name='studentGen' required value={student.studentGen} onChange={handleChange}>
        <option  defaultValue="">Select</option>
          <option value= 'Male'>Male</option>
          <option value= 'Female'>Female</option>
          <option value= 'other'>Other</option>
          
        </select>
      </div>

      <div class="mb-3">
        <label  class="form-label">Phone Number</label>
        <input type="tel"  name = "studentPhone" value={student.studentPhone}  required onChange={handleChange} class="form-control" id="phone" placeholder="Enter your phone number"/>
      </div>

      <div class="mb-3">
        <label class="form-label">Email Address</label>
        <input type="email"  name= "studentEmail"  value={student.studentEmail} required onChange={handleChange} class="form-control" id="email" placeholder="Enter your email"/>
      </div>

      
     

      
      <div class="mb-3">
        <label  class="form-label">Location</label>
        <input type="text"  name="studentAddress"  value={student.studentAddress} required onChange={handleChange} class="form-control" id="address" placeholder="Enter your address"/>
      </div>

     
     

    
      <div class="mb-3">
        <label  class="form-label">Department</label>
        <select class="form-select"  name="studentDept" value={student.studentDept} required onChange={handleChange} id="dept">
          <option defaultValue="">Choose your Branch</option>
          
          <option value= 'Mechanical'>Mechanical</option>
          <option value= 'Computer Science'>Computer Science</option>
          <option value= 'Civil'>Civil</option>
          <option value= 'Data Science'>Data Science</option>

          <option value= 'Electronics'>Electronics </option>
        </select>
      </div>

      
      

    
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>


      
    </div>
  )
}

export default StudentEdit
