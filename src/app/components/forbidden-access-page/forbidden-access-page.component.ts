import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open } from 'src/app/store/modal-window/modal-window.actions';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-forbidden-access-page',
  templateUrl: './forbidden-access-page.component.html',
  styleUrls: ['./forbidden-access-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModalWindowComponent],
})
export class ForbiddenAccessPageComponent {
  modalWindowState$: Observable<boolean> | undefined;

  constructor(
    private router: Router,
    private store: Store<{ isOpen: boolean }>
  ) {
    this.modalWindowState$ = store.select('isOpen');
  }

  navigate(): void {
    this.store.dispatch(open());
    this.router.navigate(['/']);
  }

  modalAction(str: string) {
    if (str == 'close') {
      this.router.navigate(['/']);
    }
  }
}
