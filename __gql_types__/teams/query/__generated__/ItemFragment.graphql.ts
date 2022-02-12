/**
 * @generated SignedSource<<2b1dd6c3eedc6c7d63e5eb6e7bf8cd34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "ItemFragment";
};
export type ItemFragment$key = {
  readonly " $data"?: ItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Skill",
  "abstractKey": null
};

(node as any).hash = "8d9299b350c750d64a2b70a8d47242df";

export default node;
