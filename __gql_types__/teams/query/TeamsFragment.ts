import graphql from 'babel-plugin-relay/macro'

export const WikiTeamsFragment = graphql`
fragment TeamsFragment on ReactTeam
  @refetchable(queryName: "SkillsListPaginationQuery") {
  # id
  # name
  skillConnection(first: $first, after: $after)
    @connection(key: "teams__skillConnection") {
    edges {
      cursor
      node {
        name
        ...ItemFragment
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`