import { DataService } from './data.service';
import { notfounderrror } from './../common/not-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
//private url="https://jsonplaceholder.typicode.com/posts"
constructor( http:HttpClient) {
  super("https://jsonplaceholder.typicode.com/posts",http);
 }
}
// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
// private url="https://jsonplaceholder.typicode.com/posts"
// constructor(private http:HttpClient) { }
// getPosts(){
//   return   this.http.get(this.url);
// }
// createPost(post){
//  return this.http.post(this.url,JSON.stringify(post)) 
// }
// updatePost(post){
//   return this.http.patch(this.url+"/"+post.id,JSON.stringify({isread:true}))
// }
// deletePost(id){
//  return this.http.delete(this.url+"/"+id)
 
  
// }
// }
// // // .pipe(catchError(err => err.code === 404 
//   // ? throwError(new Apperror(err))
//   // : throwError(err)))
// //
// //
// // .catch((Error:Response)=>{
// //   if(Error.status===404)
// //   return observable.throw(new notfounderrror());
// //   else
// //   return observable.throw(new apprrror());
// //   )
// // })
// ///catch((Error:Response)=>{
// //   if(Error.status===400)
// //   return observable.throw(new badinput(error.jsom()));
// //  else 
//   //  return observable.throw(new apprrror(error.jsom()));
// //   )
// //,CATCH(THIS..HANDLEerror()
// //private handleERROR (error:resspone){
// //   if(Error.status===400)
// // //   return observable.throw(new badinput(error.jsom()));
// // //  else 
// //   //  return observable.throw(new apprrror(error.jsom()));
// // //   )
// // }

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class PostService extends DataService{
// // //private url="https://jsonplaceholder.typicode.com/posts"
// // constructor( http:HttpClient) {
// //   super("https://jsonplaceholder.typicode.com/posts",http);
// //  }
// // }