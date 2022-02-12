/**
 * @generated SignedSource<<7b8a4b61deca8ed442c98fcd0c56d39b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddSkillMutation$variables = {
  memberName?: string | null;
  skill?: string | null;
};
export type AddSkillMutation$data = {
  readonly addSkill: {
    readonly edge: {
      readonly node: {
        readonly name: string;
      };
    };
  };
};
export type AddSkillMutation = {
  variables: AddSkillMutation$variables;
  response: AddSkillMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "memberName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skill"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "memberName",
    "variableName": "memberName"
  },
  {
    "kind": "Variable",
    "name": "skill",
    "variableName": "skill"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SkillResponse",
        "kind": "LinkedField",
        "name": "addSkill",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SkillResponseEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SkillResponseNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SkillResponse",
        "kind": "LinkedField",
        "name": "addSkill",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SkillResponseEdge",
            "kind": "LinkedField",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SkillResponseNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e4c3233ef054c62c1c1db8dc26f64cb7",
    "id": null,
    "metadata": {},
    "name": "AddSkillMutation",
    "operationKind": "mutation",
    "text": "mutation AddSkillMutation(\n  $memberName: String\n  $skill: String\n) {\n  addSkill(memberName: $memberName, skill: $skill) {\n    edge {\n      node {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4cbf9e013dadb97cbe372219acfeee84";

export default node;
