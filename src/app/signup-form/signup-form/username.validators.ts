import{AbstractControl, ValidationErrors} from "@angular/forms";
export class UsernameValidators {
     static cannotcontainSpace(control: AbstractControl): ValidationErrors | null{
      if ((control.value as string).indexOf(" ")>=0)
      {return {cannotcontainSpace:true};
    }
    return null;
}
static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
     return new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            if (control.value=="shubham")
            resolve ({ShouldBeUnique:true});
            else
            resolve (null);
        
        },2000);
     })
    
 
         return null;}   

}