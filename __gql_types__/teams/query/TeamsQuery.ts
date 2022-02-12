import graphql from 'babel-plugin-relay/macro';

export const WikiTeamsQuery = graphql`
  query TeamsQuery($first: Int, $after: String) {
    Teams {
      id
      name
      ...TeamsFragment
      ...HeaderFragment
    }
  }
`;
