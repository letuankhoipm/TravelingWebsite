import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '@services/tour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
  providers: [TourService]
})
export class PlaceDetailComponent implements OnInit {
  tour: any;
  id: any;
  images: any;
  constructor(private tourService: TourService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != 'create') {
          this.id = params['id'];
          console.log(this.id);
          
          this.tourService.getTourbyID("tour", this.id).subscribe(tour => {
            this.tour = tour;
            console.log(this.tour);
          })

          this.tourService.getTourbyID("images", this.id).subscribe(images => {
              this.images = images;
              console.log(this.images);
              
          })
      }
  });
  }

}
