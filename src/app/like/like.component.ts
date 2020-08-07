import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LIKEComponent {
  @Input() _likesCount: number
  @Input() isselected: boolean
  @Output() change=new EventEmitter;

  onClick() {
      this._likesCount += (this.isselected) ? -1 : 1;
      this.isselected = !this.isselected;
      this.change.emit({
        newval:this.isselected});
      }
   
  }