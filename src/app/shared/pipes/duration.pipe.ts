import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes === 0) return '';
    return minutes < 60
      ? `${minutes}min`
      : `${Math.floor(minutes / 60)}h ${minutes % 60}min`;
  }
}
