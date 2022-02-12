import graphql from 'babel-plugin-relay/macro'

export const WikiRemoveSkillMutation = graphql`
mutation RemoveSkillMutation($memberName: String, $skill: String) {
  removeSkill(memberName: $memberName, skill: $skill) {
    id @deleteRecord
    name
  }
}
`