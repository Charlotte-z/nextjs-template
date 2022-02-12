import graphql from 'babel-plugin-relay/macro'

export const WikiHeaderFragment = graphql`
fragment HeaderFragment on ReactTeam {
  id
  name
}
`