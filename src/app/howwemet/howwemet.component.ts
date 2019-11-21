import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-howwemet',
  templateUrl: './howwemet.component.html',
  styleUrls: ['./howwemet.component.scss']
})
export class HowWeMetComponent implements OnInit {

  constructor() {
      this.openMenu();
  };

  ngOnInit() {
  }

    openMenu(){
        $('body').removeClass('noScroll');

        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }

}
