import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 120, trail = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) return value;
    let truncated = value.substring(0, limit);
    
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace > 0) {
      truncated = truncated.substring(0, lastSpace);
    }
    
    return truncated.trim() + trail;
  }

}
