import { Component, Input } from '@angular/core';

// Angular2-Chart.js
@Component({
  selector: 'app-budgetchart',
  templateUrl: './budgetchart.component.html',
  styleUrls: ['./budgetchart.component.css']
})
export class BudgetchartComponent {
  @Input() sparen = 100;
  @Input() wohnen = 0;

  

  type = "pie";
  data = {
    labels: ["Sparen", "Wohnen"],
    datasets: [{
      label: "Mein Budget",
      data: [200, 500],
      backgroundColor: ["red", "blue"]
    }]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
}
