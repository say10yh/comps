import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home-component',
  templateUrl: './mods-home-component.component.html',
  styleUrls: ['./mods-home-component.component.css']
})
export class ModsHomeComponentComponent implements OnInit {

  constructor() { }
  showModal = false
  items: any = [
    {title: ' What is a dog?',answer: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.' },
    {title: ' What kinds of dogs are there? ',answer: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.' },
    {title: 'How do you acquire a dog? ',answer: 'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.' }
  ]
  ngOnInit(): void {
  }
  onClick(){
    this.showModal = !this.showModal
  }

}
