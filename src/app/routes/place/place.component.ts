import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { PlaceService } from "@services/place.service";
import { SharedService } from '@services/shared.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourService } from '@services/tour.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [SeoService, PlaceService, TourService]

})
export class PlaceComponent implements OnInit {

  placeData: any;
  title;
  detail;
  state;
  places = [];
  tourList$: Observable<any>;
  tours : any;

  @ViewChild('appOutlet') outlet: RouterOutlet;

  public packs: any[];


  public listKind = [
    'Dài ngày',
    'Kì nghỉ'
  ];

  public page = 1;

  constructor(
    private seoService: SeoService,
    private tourService: TourService,
    private placeService: PlaceService,
    private sharedService: SharedService,
  ) {


    this.placeData = this.placeService.getAlls();
    this.sharedService.title.subscribe(title => {
      this.title = title;
    });

    this.tourList$ = this.tourService.getAlls();
  }

  ngOnInit() {
    if (this.placeData) {
      this.placeData.subscribe(places => {
        this.places = places;
        let place = places[0];
        this.seoService.generateTags({
          title: place.title,
          description: place.description,
          slug: place.slug,
          keywords: place.keywords
        });
      });
    }
    // lay cac thuoc tinhs cua database truyen vao list
    if (this.tourList$) {
      this.tourList$
        .pipe(
          map((arrayData: any[]) => {
            return arrayData.map((data) => {
              // console.log(data);
              return {
                id: data.id,
                title: data.name,
                description: data.describe,
                image: data.images.thumbnail.link,
                people: data.people,
                price: data.price
              };
            });
          })
        ).subscribe((arrayData: any[]) => {
          this.packs = arrayData;
          // console.log(this.packs);
        });
    }
    this.tourService.getAlls().subscribe(tours => {
      this.tours = tours;
    });

  }

  ngAfterViewInit() {
    //   if(this.state) {
    //     this.state = this.outlet.activatedRouteData['routing'];
    // }

    // this.router.events
    //     .subscribe((event) => {
    //         if (event instanceof NavigationStart) {

    //         }
    //         else if (
    //             event instanceof NavigationEnd ||
    //             event instanceof NavigationCancel
    //         ) {
    //             this.state = this.outlet.activatedRouteData['routing'];
    //         }
    //     });
  }

}