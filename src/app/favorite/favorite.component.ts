import { Component, OnInit,Input,Output,EventEmitter, ViewEncapsulation } from '@angular/core';

export interface Fcea{
  newvalue:boolean;
}
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input("is-Favorite")isFavorite: boolean;
  @Output() change=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite=!this.isFavorite;
   this.change.emit({
     newval:this.isFavorite});
   }

}
