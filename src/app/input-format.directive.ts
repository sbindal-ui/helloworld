import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
    @Input('appInputFormat') format;
  constructor(private el:ElementRef) { }
   @HostListener("blur") onblur(){
     let a:string=this.el.nativeElement.value;
    if(this.format=="lowecase")
     this.el.nativeElement.value=a.toLowerCase()
    else
    {
     
      this.el.nativeElement.value=a.toUpperCase() 
    }
   }

}
