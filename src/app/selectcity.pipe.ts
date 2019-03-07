import {  Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'selectcity'
})

export class SelectcityPipe implements PipeTransform {
    transform(opt: any, city?: any): any {
        //console.log('city', city);
        return (opt || opt === '0') ? opt.filter(c => { return c.cityName == city }) : opt;
    }
}
