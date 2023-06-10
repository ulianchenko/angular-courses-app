import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesItemDataService {
  modifyCreationDate = (dateStr: string): string =>
    new Date(dateStr).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

  modifyDuration = (minutes: number): string =>
    `${Math.floor(minutes / 60)}h ${minutes % 60}min`;

  modifyTitle = (coursesListItemName: string, cardIndex: number): string =>
    `Video course ${cardIndex + 1}: ${
      coursesListItemName.slice(0, 1).toUpperCase() +
      coursesListItemName.slice(1)
    }`;
}
