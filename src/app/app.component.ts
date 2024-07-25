import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoListApp';

  constructor(private renderer: Renderer2) { }

  closeOffcanvas() {
    const offcanvasElement = this.renderer.selectRootElement('#offcanvasWithBothOptions', true);
    offcanvasElement.querySelector('.btn-close').click();
  }

  ngOnInit() {

  }

}
