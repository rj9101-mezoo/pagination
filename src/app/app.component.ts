import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pagination';
  page = 1;

  clickFirst = (event: any) => {
    console.log(event.target);
    event.preventDefault();
    event.stopPropagation();
    // document.querySelectorAll(".page-link").forEach(item => {
    //   if (item.getAttribute("aria-label"))
    //   console.log();
    // })
    console.log('1');
    console.log('1');
    console.log('1');
  };

  clickLast = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(2);
  };
}
