import { Component, OnInit } from '@angular/core';
import { MatcherServiceService } from '../matcher-service.service';
import { Report } from './report';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.css'],
  providers: [MatcherServiceService]
})
export class MatcherComponent implements OnInit {

  message = '';
  file1 : File = null;
  file2 : File = null;
  report: Report;
  fileName1: string;
  fileName2: string;
  

  constructor(private matcherService : MatcherServiceService) { }

  ngOnInit(): void {
  }

  onChange1(event) {
    this.file1 = event.target.files[0];
    
  console.log('on change : ')
  }

  onChange2(event) {
    this.file2 = event.target.files[0];
    
  console.log('on change : ')
  }

  onUpload(event) {
    
    console.log(this.file1 + ' : ' + this.file2);
    if(this.file1 && this.file2) {
      this.matcherService.upload(this.file1, this.file2).subscribe((dataReport: Report) => {
        this.report = dataReport;
        if(!this.report.error) {
          this.fileName1 = this.file1.name;
          this.fileName2 = this.file2.name;
        }
      });
      
      
    } else {
      this.message = 'Please Select 2 files!!!';
    }

  }

}
