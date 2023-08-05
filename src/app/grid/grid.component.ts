import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  numbers = 0 ;
  str=" ";
  digit(event:any)
  {
    this.numbers=(this.numbers*10)+ parseInt(event.target.value);
  }
  temp=0;
  count=0;
  operator(event:any)
  {
    this.count=0;
    this.temp=this.numbers;
    this.numbers=0;
    if(event.target.value=="+")
    {
      this.count=1;
    }
    else if(event.target.value=='-')
    {
      this.count=2;
    }
    else if(event.target.value=="*")
    {
      this.count=3;
    }
    else if(event.target.value=="/")
    {
      this.count=4;
    }
  }
  equalto(event:any)
  {
    if(this.count==1)
    {

      this.numbers=this.temp+this.numbers;
    }
    else if(this.count==2)
    {

      this.numbers=this.temp-this.numbers;
    }
    else if(this.count==3)
    {

      this.numbers=this.temp*this.numbers;
    }
    else if(this.count==4)
    {

      this.numbers=this.temp/this.numbers;
    }
  }
  zero()
  {
    this.numbers=0;
  }
}
