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
store.addReducers({ inventory });

import { PageViewElement } from './page-view-element.js';
import './order-element.js';
import './order-button.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class OrdersPage extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _order: { type: Object },
    };
  }

  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>Place an order</h2>
        <p><order-button></order-button></p>
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

  stateChanged(state) {
    this._order = state.inventory.order;
  }
}

window.customElements.define('orders-page', OrdersPage);
