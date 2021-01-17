import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://orion-revisjon.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YXzNnbmhBQUFMc3kyaXNT.77-9N--_vTtDQe-_ve-_ve-_ve-_vS47bCBwMxcT77-977-9RGZkdVbvv70j77-977-9Ze-_ve-_vQ'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver= function(doc) {
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  return '/'
}