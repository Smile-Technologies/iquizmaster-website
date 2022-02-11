import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const Api_location = environment.base_api_url + '/user';
@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private httpClient:HttpClient) { }

  sendScheduleMailRequest(body): Observable<any> {
    return this.httpClient.post<any>(Api_location + '/demoMailSender', body);
  }
}
