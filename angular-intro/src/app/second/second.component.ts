import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'] 
})
export class SecondComponent {

  MyAnimal = "dog";
  ChildAnimal = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    let ourId = this.route.snapshot.paramMap.get('id')
    console.log(ourId)
  }
  btnClicked = () =>{
    this.location.back();
    console.log('button has been clicked');
  }
  childChanged = (evt: any) => {
    this.ChildAnimal = evt;
  }
}
