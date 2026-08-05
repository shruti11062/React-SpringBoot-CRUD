import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Hash,
  BookOpen,
  Calendar,
  Save,
} from "lucide-react";


function StudentForm({ onSave, editStudent }) {


  const [student, setStudent] = useState({

    name: "",
    email: "",
    age: "",
    rollNo: "",
    subject: "",

  });



  useEffect(() => {

    if (editStudent) {

      setStudent(editStudent);

    } else {

      setStudent({

        name: "",
        email: "",
        age: "",
        rollNo: "",
        subject: "",

      });

    }

  }, [editStudent]);





  const handleChange = (e)=>{

    setStudent({

      ...student,
      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = (e)=>{

    e.preventDefault();

    onSave(student);


    if(!editStudent){

      setStudent({

        name:"",
        email:"",
        age:"",
        rollNo:"",
        subject:"",

      });

    }

  };






  return (

    <div>


      <div className="
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-purple-200
      p-8
      ">



        {/* Header */}

        <h2 className="
        text-3xl
        font-bold
        bg-gradient-to-r
        from-purple-700
        to-pink-600
        bg-clip-text
        text-transparent
        mb-2
        ">

          📝 Student Registration

        </h2>



        <p className="text-gray-500 mb-8">

          Create or update student information.

        </p>







        <form onSubmit={handleSubmit}>


          <div className="grid md:grid-cols-2 gap-6">





            {/* Name */}

            <div>

              <label className="
              font-semibold
              flex
              items-center
              gap-2
              mb-2
              text-purple-700
              ">

                <User size={18}/>
                Name

              </label>



              <input

              type="text"

              name="name"

              value={student.name}

              onChange={handleChange}

              placeholder="Enter Student Name"

              required


              className="
              w-full
              border-2
              border-purple-200
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-pink-500
              focus:ring-4
              focus:ring-pink-100
              transition
              "

              />

            </div>







            {/* Email */}


            <div>


              <label className="
              font-semibold
              flex
              items-center
              gap-2
              mb-2
              text-purple-700
              ">


                <Mail size={18}/>

                Email


              </label>




              <input

              type="email"

              name="email"

              value={student.email}

              onChange={handleChange}

              placeholder="Enter Email"

              required


              className="
              w-full
              border-2
              border-purple-200
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-pink-500
              focus:ring-4
              focus:ring-pink-100
              transition
              "

              />


            </div>







            {/* Age */}


            <div>


              <label className="
              font-semibold
              flex
              items-center
              gap-2
              mb-2
              text-purple-700
              ">


                <Calendar size={18}/>

                Age


              </label>





              <input

              type="number"

              name="age"

              value={student.age}

              onChange={handleChange}

              placeholder="Age"

              required


              className="
              w-full
              border-2
              border-purple-200
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-pink-500
              focus:ring-4
              focus:ring-pink-100
              transition
              "

              />


            </div>







            {/* Roll Number */}



            <div>


              <label className="
              font-semibold
              flex
              items-center
              gap-2
              mb-2
              text-purple-700
              ">


                <Hash size={18}/>

                Roll Number


              </label>





              <input

              type="number"

              name="rollNo"

              value={student.rollNo}

              onChange={handleChange}

              placeholder="Roll Number"

              required


              className="
              w-full
              border-2
              border-purple-200
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-pink-500
              focus:ring-4
              focus:ring-pink-100
              transition
              "

              />


            </div>



          </div>







          {/* Subject */}



          <div className="mt-6">


            <label className="
            font-semibold
            flex
            items-center
            gap-2
            mb-2
            text-purple-700
            ">


              <BookOpen size={18}/>

              Subject


            </label>




            <input

            type="text"

            name="subject"

            value={student.subject}

            onChange={handleChange}

            placeholder="Subject"

            required


            className="
            w-full
            border-2
            border-purple-200
            rounded-xl
            px-4
            py-3
            outline-none
            focus:border-pink-500
            focus:ring-4
            focus:ring-pink-100
            transition
            "

            />



          </div>







          {/* Button */}



          <button

          type="submit"

          className="
          mt-8
          flex
          items-center
          gap-2
          bg-gradient-to-r
          from-purple-600
          via-pink-600
          to-rose-600
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition
          duration-300
          "

          >


            <Save size={20}/>


            {editStudent ? "Update Student" : "Add Student"}


          </button>



        </form>



      </div>


    </div>

  );

}


export default StudentForm;