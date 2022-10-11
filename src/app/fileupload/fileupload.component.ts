import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  isDragOver : boolean = false;
  droppedFiles : any = {};
  isDroppedFiles : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDragOver(event:any){
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag Over");
    this.isDragOver = true;
  }

  onDragLeave(event:any){
    event.preventDefault();
    event.stopPropagation();
    console.log("Drag Leave");
    this.isDragOver = false;
  }
  onDrop(event:any){
    event.preventDefault();
    event.stopPropagation();
    console.log("Drop Files");
    this.droppedFiles = event.dataTransfer.files;
    this.onDropFiles(this.droppedFiles)
    this.isDragOver = false;
    this.isDroppedFiles = true;
  }

  onSelectFile(event:any){
    console.log("select",event.target.files);
    this.droppedFiles = event.target.files;
    this.onDropFiles(this.droppedFiles);
  }

  onDropFiles(droppedFiles:any){
    let formData = new FormData();
    for(let item of droppedFiles){
      if(item.type == "text/csv"){
        formData.append('file', item);
      }
      console.log("Item",item,"Item Type",item.type)
    }
    let validation = ["text/csv"];
    // formData.forEach((value,key) => {
    //   console.log("nn",key,value)
    // });

  }
  
  uploadFiles(droppedFiles:any){
    let formData = new FormData();
    for(let item of droppedFiles){
      formData.append('userFiles',item);
    }
  }
}
