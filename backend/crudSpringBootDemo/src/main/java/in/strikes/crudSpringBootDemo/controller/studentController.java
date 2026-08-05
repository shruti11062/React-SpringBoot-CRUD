package in.strikes.crudSpringBootDemo.controller;

import in.strikes.crudSpringBootDemo.entity.Student;
import in.strikes.crudSpringBootDemo.repository.studentRepository;
import in.strikes.crudSpringBootDemo.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/students")
public class studentController {
    private StudentService studentService;

    public studentController(StudentService studentService){
         this.studentService=studentService;
    }


    @PostMapping("/create")
    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student){
         Student createdStudent=studentService.createStudent(student);
         return ResponseEntity
                 .status(HttpStatus.CREATED)
                 .body(createdStudent);
    }
    @GetMapping("/get")
    public ResponseEntity<Student> getStudent(@RequestParam Long id) {
        Student studentResp = studentService.getStudent(id);

        if (studentResp == null) {
           return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        } else {
            return ResponseEntity.ok(studentResp);
        }

    }
    @GetMapping("/getall")
    public ResponseEntity<List<Student>> getAllStudent() {
        List<Student> studentList = studentService.getAllStudent();

        if (studentList== null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        } else {
            return ResponseEntity.ok(studentList);
        }

    }
    @PutMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestParam Long id,@RequestBody Student student){
        Student studentResp=studentService.studentUpdate(id,student);
        if (studentResp== null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(null);
        } else {
            return ResponseEntity.ok(studentResp);
        }

    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteStudent(@RequestParam Long id) {

        boolean isDeleted = studentService.deleteStudent(id);

        if (isDeleted) {
            return ResponseEntity.ok("Student deleted successfully");
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Student not found");
    }
    @PatchMapping("/soft-delete")
    public ResponseEntity<String> softDelete(@RequestParam Long id){
        boolean isDeleted = studentService.softDelete(id);
        if (isDeleted) {
            return ResponseEntity.ok("Student softlydeleted successfully");
        }
        return ResponseEntity.notFound().build();
    }


}
