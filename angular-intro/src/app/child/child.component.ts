import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() animal!: string;
  @Output() changed = new EventEmitter();
  constructor () {}
  ngOnInit() {
    this.changed.emit('horse')
  }
  
}
