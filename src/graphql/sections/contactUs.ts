import * as graphqlBlocks from '@/graphql/objects';

const contactUs = `
... on ContactUs {
    _id
    title
    subtitle
    position
    nameText
    component
    namePlaceholder
    messagePlaceholder
    messageIcon {
      ${graphqlBlocks['image']}
    }
    messageText
    phoneText
    emailText
    emailPlaceholder
    backgroundImage {
      ${graphqlBlocks['image']}
    }
    imageTitle
    imageSubtitle
    buttonText
    image {
      ${graphqlBlocks['image']}
    }
    agreementText {
      text
      title
      link {
        ${graphqlBlocks['link']}
      }
    }
}

`;

export default contactUs;
