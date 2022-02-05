import { graphql } from 'react-relay';
export const UpdateSkill = graphql`
  mutation UpdateSkillMutation(
    $memberName: String
    $skill: String
    $update: String
  ) {
    updateSkill(memberName: $memberName, skill: $skill, update: $update) {
      id
      name
    }
  }
`;
