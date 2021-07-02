import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budgetchart',
  templateUrl: './budgetchart.component.html',
  styleUrls: ['./budgetchart.component.css']
})
export class BudgetchartComponent {

  @Input() item = '';

}
