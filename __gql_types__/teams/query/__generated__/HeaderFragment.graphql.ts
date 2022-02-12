/**
 * @generated SignedSource<<5bc38aac29dcf6a9c394a1df8fdd2ad6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "HeaderFragment";
};
export type HeaderFragment$key = {
  readonly " $data"?: HeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "ReactTeam",
  "abstractKey": null
};

(node as any).hash = "6f6423fb6020f4f54cdc686827a33f94";

export default node;
