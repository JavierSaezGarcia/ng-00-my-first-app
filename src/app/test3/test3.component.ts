import { Component } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  showParagraph = false;
  arrayText = [];

  toggleDetails() {
    this.showParagraph = !this.showParagraph;
    this.arrayText.push( new Date()  );
  }

}
