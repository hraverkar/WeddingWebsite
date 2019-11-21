import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';



@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
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
