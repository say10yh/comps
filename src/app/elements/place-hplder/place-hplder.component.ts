import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-hplder',
  templateUrl: './place-hplder.component.html',
  styleUrls: ['./place-hplder.component.css']
})
export class PlaceHplderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
