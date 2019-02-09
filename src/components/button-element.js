import { LitElement, html, css } from 'lit-element';

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
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }

        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }
      `,
    ];
  }

  render() {
    return html`
      <button ?disabled=${this.disabled}>${this.title}</button>
    `;
  }
}

customElements.define('button-element', ButtonElement);
