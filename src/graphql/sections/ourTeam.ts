import * as graphqlBlocks from '@/graphql/objects';

const ourTeam = `
    ... on OurTeam {
      _id
      position
      component
      title
      subtitle
      link {
        ${graphqlBlocks['link']}
      }
      items {
        _key
        title
        subtitle
        teamMemberPhoto {
          ${graphqlBlocks['image']}
        }
      }
    }
`;

export default ourTeam;
