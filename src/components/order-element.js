import { LitElement, html } from 'lit-element';

class OrderElement extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      delivered_at: { type: Number },
      created_at: { type: Number },
    };
  }

  _renderDeliveredAt(timestamp) {
    return html`
      <li>Delivered: ${this._timestampToDate(timestamp)}</li>
    `;
  }

  render() {
    return html`
      <div>
        <h3>
          Order #${this.id}:
          ${this.delivered_at ? 'Delivered' : 'Waiting for delivery'}
        </h3>
        <ul>
          <li>Created: ${this._timestampToDate(this.created_at)}</li>
          ${this.delivered_at ? this._renderDeliveredAt(this.delivered_at) : ''}
        </ul>
      </div>
    `;
  }

  _timestampToDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

customElements.define('order-element', OrderElement);
