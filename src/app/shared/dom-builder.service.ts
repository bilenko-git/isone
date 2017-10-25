import { Injectable, Renderer2 } from '@angular/core';

export interface IDomNode {
  tag: string | undefined;
  attributes: {
    [key: string]: string;
  };
  content: IDomNode[];
  text?: string;
}

@Injectable()
export class DomBuilderService {
  constructor(private renderer: Renderer2) {}

  DomBuilder(json: IDomNode, root?: any | undefined): any {
    if (!root) {
      root = document.createElement('div');
    }
    const node = json['tag'] ? this.renderer.createElement(json.tag) : this.renderer.createText(json.text);
    if (!json['text'] && json['attributes']) {
      for (const attr in json.attributes) {
        this.renderer.setAttribute(node, attr, json.attributes[attr]);
      }
    }
    if (root) {
      this.renderer.appendChild(root, node);
    }

    if (json['content']) {
      json.content.forEach((value: IDomNode) => {
        this.DomBuilder(value, node);
      });
    }

    return node.innerHTML;
  }
}