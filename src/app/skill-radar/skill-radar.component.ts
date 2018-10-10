import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-skill-radar',
  templateUrl: './skill-radar.component.html',
  styleUrls: ['./skill-radar.component.scss']
})
export class SkillRadarComponent implements OnInit {
//   color = Chart.helpers.color;
//   chartColors = {
//     red: 'rgb(255, 99, 132)',
//     orange: 'rgb(255, 159, 64)',
//     yellow: 'rgb(255, 205, 86)',
//     green: 'rgb(75, 192, 192)',
//     blue: 'rgb(54, 162, 235)',
//     purple: 'rgb(153, 102, 255)',
//     grey: 'rgb(201, 203, 207)'
//   };

//   type = 'radar';
//   data = {
    // labels: [['Coding','Excellence'], ['Continuous','Delivery'], 'Quality', ['Architecture &','Design'], 'Process', 'Teamwork', ['Soft', 'skills']],
//     datasets: [{
//       label: '2018',
//       data: [2.20, 2.05, 2.20, 1.00, 2.95, 2.50, 3.00],
//       backgroundColor: this.color(this.chartColors.red).alpha(0.2).rgbString(),
//       borderColor: this.chartColors.red,
//       pointBackgroundColor: this.chartColors.red,
//     },{
//       label: '2017',
//       data: [3.20, 1.05, 3.20, 2.00, 1.95, 1.50, 4.00],
//       backgroundColor: this.color(this.chartColors.blue).alpha(0.2).rgbString(),
//       borderColor: this.chartColors.blue,
//       pointBackgroundColor: this.chartColors.blue,
//     }]
//   };
//   options = {
//     legend: {
//         position: 'right',
//     },
//     title: {
//         display: true,
//         text: 'Experimento 7x7',
//         fontSize: 20
//     },
//     scale: {
//         ticks: {
//             beginAtZero: true,
//             fontSize: 10,
//             min: 0,
//             max: 7
//         },
//         pointLabels:{
//             fontSize: 12,
//             fontColor: 'ff0000'
//         },
//     }
// };
  
  // Radar
  public radarChartLabels:string[] = ['Coding Excellence',
                                    'Continuous Delivery',
                                    'Quality',
                                    'Architecture & Design',
                                    'Process',
                                    'Teamwork',
                                    'Soft skills'];
 
  public radarChartData:any = [
    {data: [2.20, 2.05, 2.20, 1.00, 2.95, 2.50, 3.00],label: '2018'},
    {data: [3.20, 1.05, 3.20, 2.00, 1.95, 1.50, 4.00],label: '2017'}
  ];
  public radarChartType:string = 'radar';

  public radarOptions = {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Experimento 7x7',
            fontSize: 20
        },
        scale: {
            ticks: {
                beginAtZero: true,
                fontSize: 10,
                min: 0,
                max: 7
            },
            pointLabels:{
                fontSize: 12,
                fontColor: 'ff0000'
            },
        }
  };
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}

