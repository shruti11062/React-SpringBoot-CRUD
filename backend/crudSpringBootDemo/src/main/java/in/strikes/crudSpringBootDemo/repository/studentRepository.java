package in.strikes.crudSpringBootDemo.repository;

import in.strikes.crudSpringBootDemo.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface studentRepository extends JpaRepository<Student,Long> {
Optional<Student> findByIdAndDeletedFalse(Long id);
List<Student> findByDeletedFalse();

}
