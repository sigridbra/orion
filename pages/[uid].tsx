import React from 'react'
import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { GetStaticPaths } from 'next'

const Page = ({ doc }) => {

  const render = (doc) => {
    const post = doc.data
    console.log(post.title[0])


    return (
      <div>
        <Head>
          <title>Orion Revisjon - {post.title[0].text}</title>

        </Head>
        <div className="lg:max-w-6xl mx-auto px-4">
        <h1 className="text-3xl mb-4">{RichText.asText(post.title)}</h1>
        
          <RichText render={post.content}></RichText>

        </div>
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
  const doc = (await client.getByUID('page', params.uid, null));
  console.log(params, doc)
  return {
    props: {
      doc,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = Client();
  let results = null;
  await client.query(
    Prismic.Predicates.at('document.type', 'page')
  ).then(res => {
    results = res.results;
  })
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: results.map(page => {
      return { params: { uid: page.uid } }
    }),
    fallback: false//true or false
  }
}

export default Page;