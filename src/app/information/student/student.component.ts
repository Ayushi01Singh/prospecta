import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent  {

  constructor(private formBuilder: FormBuilder,
    private student : StudentService
  ) {}

  studentDetails = this.formBuilder.group({
    rollNumber: ['', Validators.required],
    name : ['', Validators.required],
    fatherName: [''],
    motherName: [''],
    address: [''],
    contact: ['']
  })

  onSubmit() {

    if(!this.studentDetails.get('rollNumber')?.valid) {
      return;
    }
    const studentData = {
      rollNo: this.studentDetails.get('rollNumber')?.value,
      name: this.studentDetails.get('name')?.value,
      fatherName: this.studentDetails.get('fatherName')?.value,
      motherName: this.studentDetails.get('motherName')?.value,
      address: this.studentDetails.get('address')?.value,
      phoneNumber: this.studentDetails.get('contact')?.value
    }

    this.student.saveDetails(studentData).subscribe((response) => {
      console.log('data saved');
      console.log(response);
    }, error => {

    })
  }
}
