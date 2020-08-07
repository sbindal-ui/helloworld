import { courseService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:"courses",
    template:
    `
    <h1>list of courses<h1>
    <ul>
    <li *ngFor=" let course of courses" >
    {{course}}
    </li>
    </ul>
    <button class="btn btn-primary" [style.backgroundcColor]="isActive ? 'blue' : 'white'">save</button>
    <div (click)="dc()"> 
    <h1>"i am strong"</h1>
    <button class="btn btn-primary" (click)="savew($event)">click</button> 
    </div>
    <table>
    <tr>
    <td [attr.colspan]="colspan">test</td>
    </tr>
    </table>
    <h1>
    {{ob.r | number:"1.2-2" }}<br>
    {{ob.s | uppercase}}
    </h1>
    <h1>{{text | summary}}</h1>
    <input  [(ngModel)]="email" (keyup.enter)="onkeyup()"/>
    <h1>{{email |titleCase}}</h1>
    `
    
})
export class CoursesComponent {
     ob= {
        r:123.4,
        s:"shubham"
    } 
    text="i am asdnlasndljasnjlsdnalnd";
    colspan:number=2;
    isActive:boolean=true;
    email="shubham";
    courses;
    constructor(){
        let service = new courseService();
        this.courses=service.getcourses();
    }
    savew($event)
    {
        $event.stopPropagation();
      console.log("button clicked");
    }
    dc()
    {
        console.log("div clicked");
    }
    onkeyup(){
        console.log(this.email);

    }

}