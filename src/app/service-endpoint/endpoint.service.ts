import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  baseUrl  = 'http://localhost:8080/student';
  constructor(private http: HttpClient) { }

  saveStudentDetails(stundentData: any) {
    return this.http.put<any>(this.baseUrl + `/save`, stundentData);
  }
  getStudentDetails(rollNo: any) {
    return this.http.post<any>(this.baseUrl +`/get`,{rollNo});
  }


}
