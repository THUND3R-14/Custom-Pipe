import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipes';

  txtvalue : any;
  txttype : string = '';
  file: any;
  filedata : any;

  fileData(data :any){
  this.file = data.target.files;
  }
}
