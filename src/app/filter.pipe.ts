import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) =>
      Object.values(item).some((value) => {
        // Ensure value is a string before calling toLowerCase()
        return (
          value &&
          value.toString &&
          value.toString().toLowerCase().includes(searchTerm)
        );
      })
    );
  }
}