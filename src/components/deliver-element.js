import { LitElement, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class DeliverElement extends LitElement {
  static get styles() {
    return [SharedStyles, ButtonSharedStyles];
  }

  render() {
    return html`
      <button>Deliver cola</button>
    `;
  }
}

customElements.define('deliver-element', DeliverElement);
