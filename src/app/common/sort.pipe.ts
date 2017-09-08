import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: any, order: string): any {

    let sortedArray = array.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    if (order === 'aToZ') {
      return sortedArray;
      } else {
        return sortedArray.reverse();
      }
  }
}
