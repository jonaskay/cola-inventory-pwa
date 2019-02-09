/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';
import inventory from '../reducers/inventory.js';
import { sendOrder } from '../actions/inventory.js';
store.addReducers({ inventory });

import { PageViewElement } from './page-view-element.js';
import './button-element.js';
import './order-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class OrdersPage extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _loadingOrder: { type: Boolean },
      _order: { type: Object },
      _errors: { type: Array },
    };
  }

  static get styles() {
    return [SharedStyles];
  }

  _renderErrors() {
    return html`
      <p>Error occurred:</p>
      <ul>
        ${this._errors.map(
          error =>
            html`
              <li>${error.detail || error.title}</li>
            `
        )}
      </ul>
    `;
  }

  render() {
    return html`
      <section>
        <h2>Place an order</h2>
        <p>
          <button-element
            @click="${this._handleOrder}"
            ?disabled=${this._loadingOrder || this._orderWaiting()}
            title="Order cola"
          ></button-element>
        </p>
        ${this._errors.length > 0 ? this._renderErrors() : ''}
        <p>
          ${this._order &&
            html`
              <order-element
                id=${this._order.data.id}
                delivered_at=${this._order.data.attributes.delivered_at}
                created_at=${this._order.data.attributes.created_at}
              ></order-element>
            `}
        </p>
      </section>
    `;
  }

  _handleOrder() {
    store.dispatch(sendOrder());
  }

  _orderWaiting() {
    return this._order && this._order.data.attributes.delivered_at
      ? false
      : true;
  }

  stateChanged(state) {
    this._loadingOrder = state.inventory.loading;
    this._order = state.inventory.order;
    this._errors = state.inventory.errors;
  }
}

window.customElements.define('orders-page', OrdersPage);
