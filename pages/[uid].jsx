import React from 'react'
import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'

const Page = ({ doc }) => {

  const render = (doc) => {
    const post = doc.data
    console.log(post.title[0])
    return (
      <div>
        <Head>
          <title>Orion Revisjon - {post.title[0].text}</title>

        </Head>
        <h1>{RichText.asText(post.title)}</h1>
        <RichText render={post.content}></RichText>
      </div>
    );
  }
  return (
    <div>
      {render(doc)}
    </div>
  )
}


export async function getStaticProps({ params }) {
  const client = Client();
  const doc = (await client.getByUID('page', params.uid));
  console.log(params, doc)
  return {
    props: {
      doc,
    },
  }
}

export async function getStaticPaths() {
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: [
      { params: { uid: 'om-oss' } },
      { params: { uid: 'tjenester' } },
      { params: { uid: 'kontakt' } }
    ],
    fallback: false//true or false
  }
}

export default Page;