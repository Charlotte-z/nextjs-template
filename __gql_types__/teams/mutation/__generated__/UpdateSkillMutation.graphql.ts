/**
 * @generated SignedSource<<8043b750786e377158f9aafef3aa77b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateSkillMutation$variables = {
  memberName?: string | null;
  skill?: string | null;
  update?: string | null;
};
export type UpdateSkillMutation$data = {
  readonly updateSkill: {
    readonly id: string;
    readonly name: string;
  };
};
export type UpdateSkillMutation = {
  variables: UpdateSkillMutation$variables;
  response: UpdateSkillMutation$data;
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "update"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "memberName",
        "variableName": "memberName"
      },
      {
        "kind": "Variable",
        "name": "skill",
        "variableName": "skill"
      },
      {
        "kind": "Variable",
        "name": "update",
        "variableName": "update"
      }
    ],
    "concreteType": "Skill",
    "kind": "LinkedField",
    "name": "updateSkill",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateSkillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateSkillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e88192af697165f38582629432f408b4",
    "id": null,
    "metadata": {},
    "name": "UpdateSkillMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateSkillMutation(\n  $memberName: String\n  $skill: String\n  $update: String\n) {\n  updateSkill(memberName: $memberName, skill: $skill, update: $update) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "5150606dd85e0b3a897d5a4838191e47";

export default node;
