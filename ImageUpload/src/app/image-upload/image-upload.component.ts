import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  files: File[] = [];
  public total_images : number = 0;
  img_url: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  

  // files: File[] = [];

  onSelect(event:any) {
    this.total_images += event.addedFiles.length;
    if(this.total_images > 5 )
    {
      alert("You Can Only Select Upto 5 Images !");
      location.reload();
    }
    for (let i = 0; i < File.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (e: any) => {
        this.img_url.push(e.target.result);
      }
    }
    console.log(this.total_images, "tot");
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}
}