import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toDos: any;

  constructor(private httpServiceService: HttpServiceService) {}
  
  ngOnInit(): void {
      this.httpServiceService.getToDos().subscribe((response: any) => {
        this.toDos = response;
        console.log(this.toDos[2]);
      });
  }


}
