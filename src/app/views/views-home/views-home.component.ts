import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats: any = [
    { value: 22, label: '# of users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ]
  items: any = [
    { image: 'assets/couch.jpeg', title: 'couch', description: 'A couch'},
    { image: 'assets/dresser.jpeg', title: 'dresser', description: 'A dresser'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
