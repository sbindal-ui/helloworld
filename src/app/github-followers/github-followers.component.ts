import { map } from 'rxjs/operators';
import { Observable, observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';
import {combineLatest} from "rxjs";
import {switchMap} from"rxjs/operators"
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(private service: GithubFollowersService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined=>{
      let id =combined[0].get("id");
      //refers to parammap one
      console.log("abc")
      console.log(id)
      let page=combined[1].get("page")
      //we can also use this.service.getAll({id:id,page:page})
     return  this.service.getAll()

    }))
      .subscribe(followers => this.followers = followers);
    
  }
  //   this.route.paramMap.subscribe(
  //     params=>{   }
  //   );
  // //  let id= this.route.snapshot.paramMap.get("id");
  //  this.route.queryParamMap.subscribe(
  //   params=>{ }
  //  );
  //  this.route.snapshot.queryParamMap.get("page");
}