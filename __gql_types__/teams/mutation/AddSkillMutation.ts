import graphql from 'babel-plugin-relay/macro'

export const WikiAddSkillMutation = graphql`
mutation AddSkillMutation($memberName: String, $skill: String) {
  addSkill(memberName: $memberName, skill: $skill) {
    edge {
      node {
        name
      }
    }
  }
}
`