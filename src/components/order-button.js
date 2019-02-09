import { LitElement, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class OrderButton extends LitElement {
  static get styles() {
    return [SharedStyles, ButtonSharedStyles];
  }

  render() {
    return html`
      <button>Order cola</button>
    `;
  }
}

customElements.define('order-button', OrderButton);
