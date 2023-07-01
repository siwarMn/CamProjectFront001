import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  template: `
   <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="width: 600px; height: 500px;">
    <ngx-charts-bar-vertical
      [view]="view"
      [results]="data"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
    </div>
    </div>
  `
})
export class GraphComponent {
  view: [number, number] = [400, 300];
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Label';
  yAxisLabel = 'Value';
  data = [
    { name: 'Tente', value: 10 },
    { name: 'Lampe', value: 20 },
    { name: 'Couverture', value: 30 },
    { name: 'Tente avec parasol', value: 20 },
    { name: 'chaises', value: 50 }
  ];
}
