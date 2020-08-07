import { ErrorHandler } from '@angular/core';

export class appErrorHandler implements ErrorHandler {
    handleError(error) {
        alert("an unexpected error occoured");
  console.log("error");
        // do something with the exception
         //need to register it provider array
         //we want to tell angular that to always use apperror handler istead of error handler

    }
  }
// as we were using error this message again and again we want to handle it
//error=>{
    // alert("an unexpected error occoured");
    // cons