import { Component, AfterViewInit, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { HttpService } from './../../shared/http.service';
import { DomBuilderService } from './../../shared/dom-builder.service';
import { FactoryComponent } from './../../shared/factory-component.service';

@Component({
  selector: 'app-dynamic-form',
  template: '<div #container></div>',
  providers: [HttpService, DomBuilderService, FactoryComponent]
})

export class DynamicFormComponent implements AfterViewInit {
  private url: any = '/data/data.json';
  @ViewChild('container', {read: ViewContainerRef}) container;
  constructor(
    private httpService: HttpService,
    private domBuilderService: DomBuilderService,
    private factoryComponent: FactoryComponent) {}

  ngAfterViewInit() {
    this.httpService.Http(this.url).subscribe(res => {
      this.render(this.domBuilderService.DomBuilder(res));
    });
  }

  render(dom) {
    const metadata = new Component({
      selector: 'runtime-component',
      template: dom || '<div></div>'
    });
    const factory = this.factoryComponent.Create(metadata);
    this.container.createComponent(factory);
  }
}