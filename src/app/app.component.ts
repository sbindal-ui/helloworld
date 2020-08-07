import { Fcea } from './favorite/favorite.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  course=[]
  vm="map";
  courses=[
    {id :1 ,name:"course1"},
    
    {id :2 ,name:"course2"},
    
    {id :3 ,name:"course3"},
  ]
  post = {
  title: 'title',
  isFavorite : true
}
onFavoriteChange(eventrargs:Fcea)
{
  console.log("changed",eventrargs)
}
like = {
  isselected: false,
  likes:10
}
onclick(evarg)
{
  console.log("changed",evarg)
}
onadd(){
this.courses.push({id :4 ,name:"course4"})
}
onremove(coursea)
{
  let a= this.courses.indexOf(coursea)
  this.courses.splice(a,1)
}
trackCourse(index,a)
{
  return a?a.id:undefined;
}
onload()
{
  this.courses=[
    {id :1 ,name:"course1"},
    
    {id :2 ,name:"course2"},
    
    {id :3 ,name:"course3"},
  ]
}
}
