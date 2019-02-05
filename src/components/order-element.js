import { LitElement, html } from 'lit-element';

class OrderElement extends LitElement {
  render() {
    return html`
      <p>Order</p>
    `;
  }
}

customElements.define('order-element', OrderElement);
