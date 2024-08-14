import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent{

  constructor(private viewportScroller: ViewportScroller) {}

  vaiProComponenteContato() {
    this.viewportScroller.scrollToAnchor('contato');
  }

}
