import {Pipe,PipeTransform} from "@angular/core"
import { pipe } from "rxjs";
@Pipe({
    name:"summary",
})
export class SummaryPipe implements PipeTransform
{
    transform(value: string,args?: any) {
        if(!value)
        {
            return null;
        }
        return value;
    }

}