import { WINDOW } from '@ng-toolkit/universal';
import { Component , Inject} from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'phuongbinhtourist';

  constructor(@Inject(WINDOW) private window: Window, private router: Router) {

  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {

        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {

          this.window.scrollTo(0, 0);
        }
      });
  }
}
