import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(contacts: any[], filterString: string, propName: string): any[] {

    if (contacts.length === 0 || filterString === '') {
      return contacts;
    }

    const resultArray = [];
    for (const item of contacts) {
      let lowercaseString = item[propName].toLowerCase();
      if (lowercaseString.indexOf(filterString.toLowerCase()) !== -1 ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
