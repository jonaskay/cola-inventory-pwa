import { LitElement, html } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class ButtonElement extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles];
  }

  render() {
    return html`
      <button ?disabled=${this.disabled}>${this.title}</button>
    `;
  }
}

customElements.define('button-element', ButtonElement);
