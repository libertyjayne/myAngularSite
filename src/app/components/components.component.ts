import { Component, OnInit } from '@angular/core';

//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollTo(document.scrollingElement || document.documentElement, targetScroll.offsetTop, 1250);
}
scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

}
