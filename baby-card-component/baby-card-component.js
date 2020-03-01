import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons';

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
          width: 150px;
          height: 70px;
          box-shadow: 0px 3px 5px rgb(0,0,0, 0.4);
          font-family: Arial;
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 20px;
          padding-right: 20px;
        }

        .icon {
          --iron-icon-height: 40px;
          --iron-icon-width: 40px;
        }

        .mr8 {
          margin-right: 8px;
        }
      </style>

      <div class="card" style="color: [[color]];">
        <iron-icon icon="[[iconName]]" class="icon mr8"></iron-icon>
        <slot name="text" class="text"></slot>
        <iron-icon icon="communication:call-made" class="icon"></iron-icon>
      </div>
    `;
  }
  static get properties() {
    return {
      color: {
        type: String,
        reflectToAttribute: true,
      },
      iconName: {
        type: String,
        reflectToAttribute: true,
      },
    };
  }
}

window.customElements.define('baby-card-component', BabyCardComponent);
