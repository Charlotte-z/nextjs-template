/**
 * @generated SignedSource<<70dae0d5f74270f6be7b8e50531f8c71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeamsQuery$variables = {
  first?: number | null;
  after?: string | null;
};
export type TeamsQuery$data = {
  readonly Teams: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"TeamsFragment" | "HeaderFragment">;
  } | null>;
};
export type TeamsQuery = {
  variables: TeamsQuery$variables;
  response: TeamsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ReactTeam",
        "kind": "LinkedField",
        "name": "Teams",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TeamsFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeaderFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ReactTeam",
        "kind": "LinkedField",
        "name": "Teams",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Skills",
            "kind": "LinkedField",
            "name": "skillConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SkillEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Skill",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "teams__skillConnection",
            "kind": "LinkedHandle",
            "name": "skillConnection"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "57f2a217efce3516678868f623d77f7b",
    "id": null,
    "metadata": {},
    "name": "TeamsQuery",
    "operationKind": "query",
    "text": "query TeamsQuery(\n  $first: Int\n  $after: String\n) {\n  Teams {\n    id\n    name\n    ...TeamsFragment\n    ...HeaderFragment\n  }\n}\n\nfragment HeaderFragment on ReactTeam {\n  id\n  name\n}\n\nfragment ItemFragment on Skill {\n  name\n}\n\nfragment TeamsFragment on ReactTeam {\n  skillConnection(first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        name\n        ...ItemFragment\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "e220e18eb2ccf6f2a2695b44f110e0a2";

export default node;
