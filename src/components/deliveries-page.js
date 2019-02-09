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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import { PageViewElement } from './page-view-element.js';
import './button-element.js';

import { store } from '../store.js';
import inventory from '../reducers/inventory.js';
import { sendDelivery } from '../actions/inventory.js';
store.addReducers({ inventory });

class DeliveriesPage extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _loadingOrder: { type: Boolean },
      _order: { type: Object },
    };
  }

  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>Make a delivery</h2>
        <p class="button-wrapper">
          <button-element
            @click="${this._handleDelivery}"
            ?disabled=${this._loadingOrder || !this._orderWaiting()}
            title="Deliver cola"
          ></button-element>
        </p>
      </section>
    `;
  }

  _handleDelivery() {
    store.dispatch(sendDelivery());
  }

  _orderWaiting() {
    return this._order && this._order.data.attributes.delivered_at
      ? false
      : true;
  }

  stateChanged(state) {
    this._loadingOrder = state.inventory.loading;
    this._order = state.inventory.order;
  }
}

window.customElements.define('deliveries-page', DeliveriesPage);
