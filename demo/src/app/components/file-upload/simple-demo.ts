import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'http://93.49.6.246:3002/api';

@Component({
  selector: 'simple-demo',
  templateUrl: './simple-demo.html'
})
export class SimpleDemoComponent {

  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor (){
    this.uploader = new FileUploader({url: URL});

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe( res => this.response = res );
   // public uploader:FileUploader = new FileUploader({url: URL});

  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
