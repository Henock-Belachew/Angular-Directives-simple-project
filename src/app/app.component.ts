import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesProject';
  
  isSubmitted = true;
  
  submit(status: any){
this.isSubmitted = status;
  }


}
