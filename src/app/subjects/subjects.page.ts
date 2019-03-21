import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { RestProvider } from '../providers/rest/rest';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  form: FormGroup;

  ngOnInit() {
  }

  subjects = [
    { id: 1, name: 'Study & Thinking Skills' },
    { id: 2, name: 'Komunikasyon sa Akademikong Filipino' },
    { id: 3, name: 'Modern College Algebra' },
    { id: 4, name: 'Philippine History' },
    { id: 5, name: 'Philosophy of Man' },
    { id: 6, name: 'Computer Fundamentals w/ Art & Style' },
    { id: 7, name: 'Introduction to Information Technology and Internet' },
    { id: 8, name: 'Grammar & Reading' },
    { id: 9, name: 'Physical Fitness' },
    { id: 10, name: 'National Service Training Program' },
    { id: 11, name: 'Writing in Discipline' },
    { id: 12, name: 'Trigonometry and Analytical Geometry' },
    { id: 13, name: 'Politics & Governance with Philippine Constitution' },
    { id: 14, name: 'Operating System' },
    { id: 15, name: 'Application Software' },
    { id: 16, name: 'Programming 1' },
    { id: 17, name: 'Logic Design & Digital Computer Circuits' },
    { id: 18, name: 'Rhythmic Activities' },
    { id: 19, name: 'National Service Training Program' },
    { id: 20, name: 'E-Commerce' },
    { id: 21, name: 'System Project Management' },
    { id: 22, name: 'File Organization' },
    { id: 23, name: 'Asian Literature' },
    { id: 24, name: 'Programming 2' },
    { id: 25, name: 'Data Structure & Algorithms' },
    { id: 26, name: 'Micro Troubleshooting' },
    { id: 27, name: 'Fundamentals of Games & Sports' },
    { id: 28, name: 'Relational Database Management System' },
    { id: 29, name: 'Professional Ethics & Values Education' },
    { id: 30, name: 'Data Communication & Networking' },
    { id: 31, name: 'System Analysis and Design' },
    { id: 32, name: 'Software Integration' },
    { id: 33, name: 'On-The-Job Training' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      subjects: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.subjects.map((o, i) => {
      const control = new FormControl(false); // if first item set to true, else false
      (this.form.controls.subjects as FormArray).push(control);
    });
  }

  submit() {
    console.log(this.form.value);
    // registerInstructor(this.form.value);
  }

}
