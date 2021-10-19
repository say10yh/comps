import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: any = [];
  showAccordion= 0
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index:number){
    
    this.showAccordion = index
    }
}

