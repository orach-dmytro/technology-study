import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { submit } from 'src/app/store/auth-form/auth-form.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule],
})
export class AuthFormComponent {
  public authFormState$: Observable<boolean> | undefined;

  constructor(
    private store: Store<{ modalFormState: boolean }>,
    private router: Router
  ) {
    this.authFormState$ = store.select('modalFormState');
  }

  authForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', Validators.required),
  });

  submit(event: FormGroup): void {
    if (event.valid) {
      this.store.dispatch(submit());
      this.router.navigate(['customer-database']);
    }
  }
}
