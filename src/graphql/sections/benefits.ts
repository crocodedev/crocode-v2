const benefits = `
  ... on Benefits {
    _id
    component
    position
    subtitle
    title
    itemsLeft {
      _key
      text
      title
    }

    itemsRight {
      _key
      text
      title
    }
  }
`;

export default benefits;
