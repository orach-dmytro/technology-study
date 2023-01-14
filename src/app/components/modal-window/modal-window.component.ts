import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open, close } from 'src/app/store/modal-window/modal-window.actions';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, AuthFormComponent],
})
export class ModalWindowComponent {
  public modalWindowState$: Observable<boolean> | undefined;

  @Input() modalTitle: string = 'Title';

  @Output() modalAction = new EventEmitter<string>();

  @ContentChild('content', { static: false })
  content: ElementRef | undefined;

  constructor(private store: Store<{ modalWindowState: boolean }>) {
    this.modalWindowState$ = store.select('modalWindowState');
  }

  public open(): void {
    this.store.dispatch(open());
    this.modalAction.emit('open');
  }

  public close(): void {
    this.store.dispatch(close());
    this.modalAction.emit('close');
  }
}
