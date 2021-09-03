import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarCompnent implements OnChanges {

  @Input()
  rating: number = 0;

  starwith!: number;

  ngOnChanges(): void {
    this.starwith = this.rating * 50 / 3;
  }

}
