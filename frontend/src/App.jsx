import { useEffect, useState } from "react";
import {
  GraduationCap,
  Users,
  Search,
  Database,
  Activity,
  BookOpen,
} from "lucide-react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  softDeleteStudent,
} from "./services/studentService";

function App() {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const [searchId, setSearchId] = useState("");
  const [searchedStudent, setSearchedStudent] = useState(null);


  useEffect(() => {
    loadStudents();
  }, []);


  const loadStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data || []);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSave = async (student) => {

    try {

      if(editStudent){

        await updateStudent(editStudent.id,student);
        setEditStudent(null);

      }
      else{

        await createStudent(student);

      }

      loadStudents();

    }
    catch(error){

      console.log(error);

    }

  };


  const handleEdit=(student)=>{

    setEditStudent(student);

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };


  const handleDelete=async(id)=>{

    await deleteStudent(id);
    loadStudents();

  };


  const handleSoftDelete=async(id)=>{

    await softDeleteStudent(id);
    loadStudents();

  };


  const handleSearch=async()=>{

    if(!searchId) return;


    try{

      const response=await getStudentById(searchId);

      setSearchedStudent(response.data);

    }
    catch{

      alert("Student Not Found");
      setSearchedStudent(null);

    }

  };


return (

<div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950">


<div className="max-w-7xl mx-auto px-6 py-12">


{/* HERO */}

<div className="text-center">


<div className="inline-flex items-center gap-3 
bg-purple-500/20 backdrop-blur-xl 
px-6 py-3 rounded-full 
border border-purple-400/30">


<GraduationCap 
size={35}
className="text-pink-400"
/>


<span className="text-white font-semibold">

React • Spring Boot • MySQL

</span>


</div>



<h1 className="
mt-8 
text-6xl 
font-extrabold
bg-gradient-to-r 
from-purple-400 
via-pink-400 
to-fuchsia-400
bg-clip-text
text-transparent
">

Student Management

</h1>



<p className="text-2xl text-purple-200 mt-5">

Student Administration Dashboard

</p>



<p className="
max-w-3xl 
mx-auto 
text-purple-100/70
mt-5 
text-lg
">

Manage student records using Create, Read,
Update, Delete and Soft Delete operations
through React + Spring Boot Dashboard.

</p>


</div>





{/* DASHBOARD CARDS */}


<div className="grid md:grid-cols-4 gap-6 mt-14">



<div className="
bg-gradient-to-br 
from-purple-900/50
to-pink-900/40
backdrop-blur-xl
rounded-3xl
p-8
border
border-purple-400/30
hover:scale-105
transition
">


<Users 
size={40}
className="text-pink-400 mb-5"
/>


<h3 className="text-white text-xl font-bold">

Total Students

</h3>


<h1 className="
text-5xl
font-bold
text-pink-300
mt-3
">

{students.length}

</h1>


</div>





<div className="
bg-gradient-to-br 
from-purple-900/50
to-pink-900/40
backdrop-blur-xl
rounded-3xl
p-8
border
border-purple-400/30
hover:scale-105
transition
">


<BookOpen
size={40}
className="text-purple-300 mb-5"
/>


<h3 className="text-white text-xl font-bold">

CRUD Operations

</h3>


<p className="text-purple-200 mt-3">

Create • Read • Update • Delete

</p>


</div>




<div className="
bg-gradient-to-br 
from-purple-900/50
to-pink-900/40
backdrop-blur-xl
rounded-3xl
p-8
border
border-purple-400/30
hover:scale-105
transition
">


<Activity
size={40}
className="text-fuchsia-400 mb-5"
/>


<h3 className="text-white text-xl font-bold">

REST API

</h3>


<p className="text-pink-400 font-bold mt-3">

Connected

</p>


</div>





<div className="
bg-gradient-to-br 
from-purple-900/50
to-pink-900/40
backdrop-blur-xl
rounded-3xl
p-8
border
border-purple-400/30
hover:scale-105
transition
">


<Database
size={40}
className="text-yellow-300 mb-5"
/>


<h3 className="text-white text-xl font-bold">

Database

</h3>


<p className="text-purple-200 mt-3">

MySQL

</p>


</div>



</div>{/* STUDENT FORM */}

<div className="
bg-gradient-to-br
from-white
to-purple-50
rounded-3xl
shadow-2xl
mt-14
p-8
">

<StudentForm
  onSave={handleSave}
  editStudent={editStudent}
/>


</div>





{/* SEARCH */}

<div className="
bg-gradient-to-br
from-white
to-purple-50
rounded-3xl
shadow-2xl
p-8
mt-10
">


<h2 className="
text-3xl
font-bold
mb-6
flex
items-center
gap-3
text-purple-900
">


<Search className="text-pink-600"/>

Search Student


</h2>




<div className="flex gap-4">


<input

type="number"

placeholder="Enter Student ID"

value={searchId}

onChange={(e)=>setSearchId(e.target.value)}

className="
border-2
border-purple-200
rounded-xl
px-5
py-3
w-72
focus:ring-4
focus:ring-pink-200
outline-none
"

/>



<button

onClick={handleSearch}

className="
bg-gradient-to-r
from-purple-600
via-fuchsia-600
to-pink-600
text-white
px-8
rounded-xl
hover:scale-105
transition
"

>

Search

</button>


</div>





{
searchedStudent && (

<div className="
mt-8
rounded-2xl
bg-gradient-to-br
from-purple-100
to-pink-100
p-6
border
border-purple-200
">


<h2 className="
font-bold
text-2xl
mb-3
text-purple-900
">

Student Details

</h2>



<p>
<b>Name :</b> {searchedStudent.name}
</p>


<p>
<b>Email :</b> {searchedStudent.email}
</p>


<p>
<b>Age :</b> {searchedStudent.age}
</p>


<p>
<b>Roll No :</b> {searchedStudent.rollNo}
</p>


<p>
<b>Subject :</b> {searchedStudent.subject}
</p>



</div>

)

}



</div>






{/* STUDENT LIST */}


<div className="
bg-gradient-to-br
from-white
to-purple-50
rounded-3xl
shadow-2xl
p-8
mt-10
">


<StudentList

students={students}

onEdit={handleEdit}

onDelete={handleDelete}

onSoftDelete={handleSoftDelete}

/>


</div>




</div>


</div>

);


}


export default App;