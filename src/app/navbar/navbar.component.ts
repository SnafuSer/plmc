import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavComponent {
  title = 'nav';
  ngOnInit() {
    $(document).ready(function() {
      $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".sidenav").toggleClass('full');
        $("#fullpage").toggleClass('display');
      });
       $('.itemMenu').click(function(){
        $('#nav-icon').toggleClass('open');
        $(".sidenav").toggleClass('full');
        $(".itemMenu").toggleClass('full');
      });
    
      $('#test').click(function(){
        $(".about").toggleClass('full');
        $(".arrow").toggleClass('appear');
      });
    
    });
    
  }
  
}

