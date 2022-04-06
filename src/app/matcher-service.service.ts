import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Report } from './matcher/report';

@Injectable()
export class MatcherServiceService {

  constructor(private http:HttpClient) { }

  baseApiUrl = "http://localhost:8080/upload";

  upload(file1, file2):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file1", file1, file1.name);
    formData.append("file2", file2, file2.name);
      
    // Make http post request over api
    // with formData as req
    console.log('geldi');
    return (this.http.post<Report>(this.baseApiUrl, formData));
}

}
