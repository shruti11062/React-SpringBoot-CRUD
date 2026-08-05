package in.strikes.crudSpringBootDemo.service;

import in.strikes.crudSpringBootDemo.entity.Student;
import in.strikes.crudSpringBootDemo.repository.studentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class StudentService {
    private studentRepository studentRepository;

    public StudentService(studentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student createStudent(Student studentReq) {
        studentReq.setDeleted(false);
        Student studentResp = studentRepository.save(studentReq);
        return studentResp;

    }

    public Student getStudent(Long id) {
        Optional<Student> studentResp = studentRepository.findByIdAndDeletedFalse(id);
        if (studentResp.isPresent()) {
            return studentResp.get();
        }
        System.out.println("not present");
        return null;

    }

    public List<Student> getAllStudent() {
        List<Student> studentList = studentRepository.findByDeletedFalse();
        return studentList;
    }

    public Student studentUpdate(Long id, Student student) {
        Optional<Student> studentResp = studentRepository.findByIdAndDeletedFalse(id);
        if (studentResp.isPresent()) {
            Student studentsave = studentResp.get(); // Database wala student

            studentsave.setName(student.getName());
            studentsave.setEmail(student.getEmail());
            studentsave.setAge(student.getAge());
            studentsave.setRollNo(student.getRollNo());
            studentsave.setSubject(student.getSubject());
            studentsave.setDeleted(false);
            return studentRepository.save(studentsave);

        }
        return null;
    }

    public boolean deleteStudent(Long id) {

        Optional<Student> studentResp = studentRepository.findById(id);

        if (studentResp.isPresent()) {
            studentRepository.deleteById(id);
            return true;
        }

        return false;
    }

    public boolean softDelete(Long id) {
        Optional<Student> existingStudent =
                studentRepository.findByIdAndDeletedFalse(id);
        if (existingStudent.isEmpty()) {
            return false;
        }
        Student studentToSave = existingStudent.get();
        studentToSave.setDeleted(true);
        studentRepository.save(studentToSave);
        return true;
    }

}
