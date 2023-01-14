import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModalWindowComponent, AuthFormComponent],
})
export class LoginComponent {
  constructor(private router: Router) {}
  modalAction(event: string) {
    if (event == 'close') {
      this.router.navigate(['forbidden-access']);
    }
  }
}
