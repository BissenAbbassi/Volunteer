import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { LineChartModule } from '@swimlane/ngx-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, ChartModule, LineChartModule,NgxChartsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  // Donations Chart Data
  public donations = [
    { name: 'January', value: 20 },
    { name: 'February', value: 10 },
    { name: 'March', value: 50 },
    { name: 'April', value: 15 },
    { name: 'May', value: 34 },
  ];

  // Volunteering Hours Chart Data
  public volunteeringHours = [
    { name: 'January', value: 30 },
    { name: 'February', value: 25 },
    { name: 'March', value: 10 },
    { name: 'April', value: 24 },
    { name: 'May', value: 45 },
  ];

  // Charity Work Data (Pie chart)
  public charityWork = [
    { name: 'Tunisian Scouts', value: 35 },
    { name: 'Robotics Club', value: 45 },
    { name: 'CRT Tunisia', value: 20 },
  ];

  // Chart Configuration for Volunteering Hours and Donations
  public view: [number, number] = [700, 400];
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public gradient: boolean = false;
  public showLegend: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = 'Month';
  public showYAxisLabel: boolean = true;
  public yAxisLabel: string = 'Amount';

  public colorScheme = {
    name: 'coolHue',
    selectable: true,
    group: 'Ordinal',
    colors: [
      '#4f9bb8',  // Soft teal
      '#00796b',  // Deep teal
      '#0288d1',  // Bright blue
      '#01579b',  // Dark blue
      '#0288d1',  // Blue again
    ]
  };


  public totalCharityWorks = this.charityWork.reduce((sum, item) => sum + item.value, 0);
  public totalDonations = this.donations.reduce((sum, item) => sum + item.value, 0);
  public totalVolunteeringHours = this.volunteeringHours.reduce((sum, item) => sum + item.value, 0);
}
