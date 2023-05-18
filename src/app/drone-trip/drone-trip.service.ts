import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DroneTripService {

  apiUrl = environment.api;

  constructor(private httpClient: HttpClient) { }

  assignLocationsToDrones(data: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', `application/json`);
    
    return this.httpClient.post(`${this.apiUrl}/assign-location-to-drones/`, data, { headers });
  }
}
