import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadComponent = false;
  ngOnInit(): void {
    this.loadComponent=false;
  }  
  showLoading(arg:boolean){
    if(arg)
    {
      this.loadComponent=true;
      document.body.style.background = 'rgba(0,0,0,0.7)';
    }
    else{
      this.loadComponent=false;
      document.body.style.background = 'rgba(0,0,0,0)';
    }
  }
}