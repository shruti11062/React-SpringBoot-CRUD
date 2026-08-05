import {
  Pencil,
  Trash2,
  UserX,
  Users,
} from "lucide-react";


function StudentList({
  students,
  onEdit,
  onDelete,
  onSoftDelete,
}) {


  return (

    <div>


      {/* Heading */}

      <div className="flex items-center justify-between mb-8">


        <div>

          <h2 className="
          text-3xl 
          font-bold 
          flex 
          items-center 
          gap-3
          bg-gradient-to-r 
          from-purple-700 
          to-pink-600 
          bg-clip-text 
          text-transparent
          ">

            <Users className="text-purple-600"/>

            Student Directory

          </h2>


          <p className="text-gray-500 mt-2">

            View, update and manage all registered students.

          </p>


        </div>



        <div className="
        bg-gradient-to-r 
        from-purple-100 
        to-pink-100 
        text-purple-700 
        px-5 
        py-3 
        rounded-xl 
        font-semibold
        shadow
        ">

          Total : {students.length}

        </div>



      </div>




      {


      students.length === 0 ?


      (

        <div className="text-center py-20">


          <h2 className="text-7xl mb-5">

            📂

          </h2>


          <h1 className="
          text-3xl 
          font-bold 
          text-gray-700
          ">

            No Students Found

          </h1>


          <p className="text-gray-500 mt-3">

            Add your first student to get started.

          </p>


        </div>

      )


      :


      (


      <div className="grid gap-6">


        {


        students.map((student)=>(


          <div

          key={student.id}

          className="
          bg-white
          rounded-3xl
          p-6
          border
          border-purple-200
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-1
          transition
          duration-300
          "


          >



            {/* Top Section */}


            <div className="
            flex 
            justify-between 
            items-center
            mb-6
            ">


              <div>


                <h3 className="
                text-2xl
                font-bold
                bg-gradient-to-r
                from-purple-700
                to-pink-600
                bg-clip-text
                text-transparent
                ">

                  {student.name}

                </h3>


                <p className="text-gray-500 mt-1">

                  Student ID : {student.id}

                </p>


              </div>



              <div className="
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              px-5
              py-2
              rounded-full
              font-semibold
              shadow
              ">

                {student.subject}

              </div>


            </div>





            {/* Details */}


            <div className="grid md:grid-cols-2 gap-4">


              <div className="
              bg-gradient-to-r 
              from-purple-50 
              to-pink-50
              p-4
              rounded-xl
              border
              border-purple-100
              ">

                📧 <b>Email:</b> {student.email}

              </div>




              <div className="
              bg-gradient-to-r 
              from-purple-50 
              to-pink-50
              p-4
              rounded-xl
              border
              border-purple-100
              ">

                🎂 <b>Age:</b> {student.age}

              </div>





              <div className="
              bg-gradient-to-r 
              from-purple-50 
              to-pink-50
              p-4
              rounded-xl
              border
              border-purple-100
              ">

                🎓 <b>Roll No:</b> {student.rollNo}

              </div>





              <div className="
              bg-gradient-to-r 
              from-purple-50 
              to-pink-50
              p-4
              rounded-xl
              border
              border-purple-100
              ">

                📚 <b>Subject:</b> {student.subject}

              </div>


            </div>





            {/* Buttons */}


            <div className="
            flex
            flex-wrap
            gap-3
            mt-6
            ">



              <button

              onClick={()=>onEdit(student)}

              className="
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              px-5
              py-2
              rounded-xl
              flex
              items-center
              gap-2
              hover:scale-105
              transition
              "

              >

                <Pencil size={18}/>

                Edit

              </button>






              <button

              onClick={()=>onDelete(student.id)}

              className="
              bg-gradient-to-r
              from-pink-600
              to-rose-700
              text-white
              px-5
              py-2
              rounded-xl
              flex
              items-center
              gap-2
              hover:scale-105
              transition
              "

              >

                <Trash2 size={18}/>

                Delete

              </button>







              <button

              onClick={()=>onSoftDelete(student.id)}

              className="
              bg-gradient-to-r
              from-purple-900
              to-pink-900
              text-white
              px-5
              py-2
              rounded-xl
              flex
              items-center
              gap-2
              hover:scale-105
              transition
              "

              >

                <UserX size={18}/>

                Soft Delete

              </button>



            </div>



          </div>


        ))


        }



      </div>


      )


      }


    </div>

  );

}


export default StudentList;