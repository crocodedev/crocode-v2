const imageBlock = `{
  asset {
    url
    metadata {
      dimensions {
        width
        height
      }
      lqip
    }
  }
}
`;

const imagePortfolio = `
  _key
  altTextImage1
  image1 ${imageBlock}
  altTextImage2
  image2 ${imageBlock}
  altTextImage3
  image3 ${imageBlock}
  altTextImage4
  image4 ${imageBlock}
  altTextImage5
  image5 ${imageBlock}
`;

export default imagePortfolio;
