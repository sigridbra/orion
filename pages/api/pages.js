// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '../prismic-configuration'

export default (req, res) => {

  const client = Client();
  const doc = (await client.getByUID('page', params.uid, null));
  console.log(params, doc)
  return {
    props: {
      doc,
    },
  }

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
