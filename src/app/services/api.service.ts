import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Event {
  id: string;
  eventName: string;
  description: string;
  location: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/event'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  // Filter events by date range
  filterEventsByDateRange(startDate: string, endDate: string): Observable<Event[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<Event[]>(`${this.apiUrl}/filter-events`, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching events:', error);
        throw error;
      })
    );
  }
}
