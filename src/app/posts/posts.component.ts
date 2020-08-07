import { notfounderrror } from './../common/not-error';
import { badinput } from './../common/bad-input';
import { Apperror } from './../common/app-error';
import { DataService } from './../services/data.service';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css']
// })
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit()
  {
    this.service.getAll()
      .subscribe(response=>{
                this.posts=response
                console.log(this.posts)});
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);
    //first splice to put data at top second one to remove data if not worked
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost["id"];
  
          },
          (error: Apperror) => {
            this.posts.splice(0,1);
            if (error instanceof badinput) {
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }
  deletePost(post) {
    let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
    
    this.service.delete(post.id)
          //to delete immidiately
      .subscribe(
        null,
        (error: Apperror) => {
          this.posts.splice(index, 0,post);
          if (error instanceof notfounderrror)
            alert('This post has already been deleted.');
          else throw error;
        });
  }
}
//   deletePost(post) {
//     this.service.delete(post.id)
//       .subscribe(
//         () => {
//           let index = this.posts.indexOf(post);
//           this.posts.splice(index, 1);
//         },
//         (error: Apperror) => {
//           if (error instanceof notfounderrror)
//             alert('This post has already been deleted.');
//           else throw error;
//         });
//   }
// }







// export class PostsComponent implements OnInit 
// {
//   posts :any;
//   constructor(private service:PostService) { }
  
//     ngOnInit()
//   {
//    //to get data from server
//   this.service.getPosts()
//   .subscribe(response=>{
//           this.posts=response
//           console.log(this.posts)
          
// });
//   }
//   createPost(input: HTMLInputElement)
//   {//object made to add object 
//     let post ={ title: input.value};
//     console.log(post)
//     input.value="";
//     this.service.createPost(post)
//     .subscribe(response=>{
//       post["id"]=response["id"]
//       this.posts.push(post);
//       console.log(response)
//     },(error:Response)=>{
//       if(error.status === 400){
//       //this.form.setErrors(error.json())
//       }
//       else throw error;
//       })};

//     }
//       // (error:apperror)=>{
//       //   if(errorinstance of badinput){
//       //   //this.form.setErrors(error.orignalerror())
//       //   }
//       //   else{
//       //   alert("an unexpected error occoured");
//       //   console.log("error")}
//       //   })};










// //   updatepost(post){
// //     //patch used to modify some parts of objects
// //     this.service.updatePost(post)
// //     //this.http.put(this.url,JSON.stringify(post))
// //     .subscribe(response=>{
// //      console.log(response)
// //     });
// //   }
// //   deletepost(post){
// //     this.service.deletePost(post.id)
// //     .subscribe(response=>{
// //      let index =this.posts.indexOf(post);
// //      this.posts.splice(index,1);
// //      console.log(response)
// //     },(error:Response)=>{
// //       if(error.status === 404)
// //       alert("already deleted")
// //       else throw error;
      
//     });
//   }


// }
// // else{
// //   alert("an unexpected error occoured");
// //   console.log("error")}
// // });
// // or use wlse throw error
