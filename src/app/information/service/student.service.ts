import { Injectable } from '@angular/core';
import { EndpointService } from 'src/app/service-endpoint/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private endpointService: EndpointService) { }

  saveDetails(data: any) {
    return this.endpointService.saveStudentDetails(data);
  }
  getDetails(rollNo:any){
    return this.endpointService.getStudentDetails(rollNo);
  }
}
