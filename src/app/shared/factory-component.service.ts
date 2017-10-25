import { Injectable, Compiler, Component, NgModule, ModuleWithComponentFactories, ComponentFactory } from '@angular/core';
import { CommonModule } from "@angular/common";

@Injectable()
export class FactoryComponent {
  constructor(private compiler: Compiler) {}

  Create(metadata: Component): ComponentFactory<any> {
    const decoratedCmp = Component(metadata)(class RuntimeComponent{});

    @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    const module: ModuleWithComponentFactories<any> = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }
}