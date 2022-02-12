import graphql from 'babel-plugin-relay/macro'

export const WikiUpdateSkillMutation = graphql`
mutation UpdateSkillMutation(
  $memberName: String
  $skill: String
  $update: String
) {
  updateSkill(memberName: $memberName, skill: $skill, update: $update) {
    id
    name
  }
}`