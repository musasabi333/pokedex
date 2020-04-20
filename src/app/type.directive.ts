import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[pokeType]'
})
export class TypeDirective implements OnChanges {

  @Input() type: string;

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges() {
    this.el.nativeElement.style.borderRadius = '20px';
    this.el.nativeElement.style.padding = '5px 15px';
    this.el.nativeElement.style.marginRight = '5px';
    this.el.nativeElement.style.color = 'white';

    switch (this.type) {
      case 'fire':
        this.el.nativeElement.style.backgroundColor = 'red';
        break;
      case 'grass':
        this.el.nativeElement.style.backgroundColor = 'green';
        break;
      case 'water':
        this.el.nativeElement.style.backgroundColor = 'blue';
        break;
      case 'poison':
        this.el.nativeElement.style.backgroundColor = 'purple';
        break;
      case 'normal':
        this.el.nativeElement.style.backgroundColor = 'gray';
        break;
      case 'electric':
        this.el.nativeElement.style.backgroundColor = 'yellow';
        break;
      case 'ice':
        this.el.nativeElement.style.backgroundColor = '#6cf';
        break;
      case 'fighting':
        this.el.nativeElement.style.backgroundColor = '#b54';
        break;
      case 'ground':
        this.el.nativeElement.style.backgroundColor = '#db5';
        break;
      case 'flying':
        this.el.nativeElement.style.backgroundColor = '#89f';
        break;
      case 'psychic':
        this.el.nativeElement.style.backgroundColor = '#f59';
        break;
      case 'bug':
        this.el.nativeElement.style.backgroundColor = '#ab2';
        break;
      case 'rock':
        this.el.nativeElement.style.backgroundColor = '#ba6';
        break;
      case 'ghost':
        this.el.nativeElement.style.backgroundColor = '#66b';
        break;
      case 'dragon':
        this.el.nativeElement.style.backgroundColor = '#76e';
        break;
      case 'fairy':
        this.el.nativeElement.style.backgroundColor = '#e9e';
        break;
      case 'steel':
        this.el.nativeElement.style.backgroundColor = '#aab';
        break;
    }
  }

}
