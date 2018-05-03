import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { NavComponent } from './navbar/navbar.component';

import * as $ from "jquery";
import { MnFullpageService,MnFullpageOptions } from 'ngx-fullpage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
      controlArrows: true,
      sectionsColor : [''],
      scrollingSpeed: 750,
      afterLoad: function(anchorLink, index){
        $(".square").addClass("right");
        $(".square-title").addClass("right");
        $(".play").addClass("right");
        if(index == 1){
          $(".bg").css('background', 'url("https://i.ytimg.com/vi/wTpD-SvwXEY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABA6W3LaU-BiHnhB8D6_SQjEgG7A")');
          $(".square").removeClass("right");
          $(".square-title").removeClass("right");
          $(".play").removeClass("right");
        }
        if(index == 2){
          $(".bg").css('background', 'url("https://i.ytimg.com/vi/wTpD-SvwXEY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABA6W3LaU-BiHnhB8D6_SQjEgG7A")');
          $(".container").removeClass("none");
        }
        if(index == 3){
          $(".bg").css('background', 'url("https://i.ytimg.com/vi/hhpqo0_MeJo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBVZMRqwqRvTTn1UMnrbPsPaWVhpA")');
        }
        
      },
      onLeave: function(index, nextIndex, direction){
        //after leaving section 2
        if(index == 2 && direction =='up'){
          $(".bg-back").removeClass("none");
          $(".square").removeClass("right");
          $(".square-title").removeClass("right");
          $(".play").removeClass("right");
        }
        if(index == 1 && direction =='down'){
          $(".bg-back").addClass("none");
          
        }
  
      },
      
      menu: '.menu',
      
      css3: true,
      anchors: [
          'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
          'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
      ],
  });
}
