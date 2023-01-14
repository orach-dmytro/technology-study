import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isAuthorized$: Observable<boolean>;

  constructor(
    private store: Store<{ authState: boolean }>,
    private router: Router
  ) {
    this.isAuthorized$ = this.store.select('authState');
  }

  ngOnInit() {
    this.store.select('authState').subscribe((state) => {
      if (!state) {
        this.router.navigate(['/']);
      }
    });
  }
}
