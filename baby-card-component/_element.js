import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `baby-card-component`
 * A tiny card with minimal information.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BabyCardComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'baby-card-component',
      },
    };
  }
}

window.customElements.define('baby-card-component', BabyCardComponent);
