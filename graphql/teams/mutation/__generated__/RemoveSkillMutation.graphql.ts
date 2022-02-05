/**
 * @generated SignedSource<<97e5eaa23a564f8d92d7443c4fc6bb69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveSkillMutation$variables = {
  memberName?: string | null;
  skill?: string | null;
};
export type RemoveSkillMutationVariables = RemoveSkillMutation$variables;
export type RemoveSkillMutation$data = {
  readonly removeSkill: {
    readonly id: string;
    readonly name: string;
  };
};
export type RemoveSkillMutationResponse = RemoveSkillMutation$data;
export type RemoveSkillMutation = {
  variables: RemoveSkillMutationVariables;
  response: RemoveSkillMutation$data;
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
  "name": "id",
  "storageKey": null
},
v3 = {
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
    "name": "RemoveSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Skills",
        "kind": "LinkedField",
        "name": "removeSkill",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "RemoveSkillMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Skills",
        "kind": "LinkedField",
        "name": "removeSkill",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "93096e478a42ff9d477248de58aa3288",
    "id": null,
    "metadata": {},
    "name": "RemoveSkillMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveSkillMutation(\n  $memberName: String\n  $skill: String\n) {\n  removeSkill(memberName: $memberName, skill: $skill) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "0096eecce109cca74b78db1195a08781";

export default node;