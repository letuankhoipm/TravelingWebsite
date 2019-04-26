import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { PlaceService } from "@services/place.service";
import { SharedService } from '@services/shared.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourService } from '@services/tour.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [SeoService, PlaceService, TourService]

})
export class PlaceComponent implements OnInit {
  public searchTerm = '';
  public searchTerms$ = new Subject<string>();
  public placeData: any;
  public title;
  public detail;
  public state;
  public places = [];
  public tourList$: Observable<any>;
  public tours: any;
  public packs: any[];
  public originalPacks: any[];
  public viewType: string;

  @ViewChild('appOutlet') outlet: RouterOutlet;



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
    this.initRealTimeSearch();
  }

  ngOnInit() {
    this.viewType = 'list';

    if (this.placeData) {
      this.placeData.subscribe(places => {
        // this.places = places;
        const place = places[0];
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
          console.log(this.packs);
          this.originalPacks = [...arrayData];
        });
    }
    this.tourService.getAlls().subscribe(tours => {
      this.tours = tours;
      console.log(this.tours);
    });

  }

  public updateTerm(value: string) {
    this.searchTerm = value;
  }

  private initRealTimeSearch() {
    const searchFilter = (target: string) => (obj: { title: string }) => {
      if (obj.title.toLowerCase().includes(target.toLowerCase())) {
        return true;
      }
      return false;
    };
    this.searchTerms$.subscribe((value: string) => {
      if (this.packs) {
        this.packs = this.originalPacks.filter(searchFilter(value));
      }
    });
  }

  public displayViewList(): void {
    this.viewType = 'list';
  }

  public displayViewGrid(): void {
    this.viewType = 'grid';
  }

  public sortByPrice(select: string): void {
    if (select === 'asc') {
      this.packs.sort((pack1, pack2) => {
        return pack1.price - pack2.price;
      });
      return;
    }

    this.packs.sort((pack1, pack2) => {
      return pack2.price - pack1.price;
    });

  }

}
