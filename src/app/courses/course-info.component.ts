import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private router: ActivatedRoute, private service: CourseService){

  }

  ngOnInit(): void {
    this.service.retrieveById(+this.router.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: error => console.log(error)
    })
  }

  save(): void {
    this.service.save(this.course).subscribe({
        next: course => console.log('Saved with success', course),
        error: err => console.log('Error', err)
    });
}
}
