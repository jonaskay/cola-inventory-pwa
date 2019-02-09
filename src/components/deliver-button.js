import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class DeliverButton extends LitElement {
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
      <button>Deliver cola</button>
    `;
  }
}

customElements.define('deliver-button', DeliverButton);
