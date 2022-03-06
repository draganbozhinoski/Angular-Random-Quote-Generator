import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { delay, Observable, switchMap } from 'rxjs';
import { RQuote } from 'src/RQuote';
import { RquoteService } from '../rquote.service';

@Component({
  selector: 'app-rquote',
  templateUrl: './rquote.component.html',
  styleUrls: ['./rquote.component.css']
})
export class RQuoteComponent implements OnInit {
  quote: RQuote | undefined;
  quotes: RQuote[] = [];
  counter = 10;
  letters = '0123456789ABCDEF';
  color = ''
  backgroundcolor = '';
  @Output() emitter = new EventEmitter();
  constructor(private service:RquoteService) { }

  ngOnInit(): void {
    this.getRandomQuote();
    this.getRandomColor();
    }

  getRandomQuote() {
    if(this.quotes.length == 0 || this.counter==0)
    {
      this.emitter.emit(true);
      setTimeout(() => {
        this.service.getQuotes().subscribe(x => {
          this.emitter.emit(false);
          this.quote = x[Math.floor(Math.random()*51)];
          this.quotes = x;
          this.counter=10;
          this.getRandomColor();
        });
      },500);
    }
    else{
      this.emitter.emit(true);
      setTimeout(() => { 
        this.emitter.emit(false);
        this.quote = this.quotes[Math.floor(Math.random()*51)]; 
        this.getRandomColor();
      },1500);
      this.counter--;
    }
  }
  getURL(){
    return `https://twitter.com/intent/tweet?source=tweetbutton&text=${this.quote?.q} -${this.quote?.a}`;
  }
  getRandomColor(){
    this.color = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`;
    document.body.style.backgroundColor = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},0.7)`;
  }
}
