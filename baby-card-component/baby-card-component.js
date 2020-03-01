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

        }

        .card {
          background-color: #fff;
          border-radius: 4px;
          width: 163px;
          height: 62px;
          box-shadow: 0px 3px 5px rgb(0,0,0, 0.4);
          font-family: Arial;
          font-size: 14px;
          font-weight: 600;
          line-height: 16px;
          color: #0F6DFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>

      <div class="card">
        <slot name="text"></slot>
      </div>
    `;
  }
  static get properties() {
    return {};
  }
}

window.customElements.define('baby-card-component', BabyCardComponent);
