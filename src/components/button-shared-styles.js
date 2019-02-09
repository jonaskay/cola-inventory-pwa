/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  button {
    font-size: inherit;
    vertical-align: middle;
    background: transparent;
    border: 2px solid var(--app-dark-text-color);
    border-radius: 3px;
    cursor: pointer;
    padding: 8px 16px;
  }

  button:hover svg {
    border-color: var(--app-primary-color);
    color: var(--app-primary-color);
    fill: var(--app-primary-color);
  }

  button:disabled {
    border-color: var(--app-disabled-color);
    color: var(--app-disabled-color);
    cursor: not-allowed;
  }
`;
