
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-list.component.html'
})


export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _course: Course[] = [];


  _filterBy!: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveALL().subscribe({
        next: courses => {
            this._course = courses;
            this.filteredCourses = this._course;
        },
        error: err => console.log('Error', err)
    })
}

deleteById(courseId: number): void {
  this.courseService.deleteById(courseId).subscribe({
    next: () =>{
      console.log("Deletado com sucesso");
      this.retrieveAll();
    },
    error: err => console.log("Error", err)
  })
}

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._course.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
