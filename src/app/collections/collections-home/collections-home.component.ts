import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: any = [
    { name: 'James', age: 25, job: 'designer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Alice', age: 24, job: 'chef' }
  ];
  headers: any = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
