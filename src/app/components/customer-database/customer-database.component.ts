import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDatabaseComponent {
  public title: string = 'Client base';
}
