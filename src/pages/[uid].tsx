import React from 'react'
import { Client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { GetStaticPaths } from 'next'
import { RssFeed } from '../components/RssFeed'

const Page = ({ doc }) => {

  const render = (doc) => {
    const post = doc.data

    return (
      <div className="flex-auto">
        <Head>
          <title>Orion Revisjon - {post.title[0].text}</title>

        </Head>
        <div className="md:max-w-5xl mx-auto px-4 min-h-full">
          <h1 className="text-3xl mb-4 text-darkBlue font-title">{RichText.asText(post.title)}</h1>

          <div className="text-lg flex flex-row">
            <div className="flex-1">{post.content[0]?.text == "feed" ? <RssFeed></RssFeed> : <RichText render={post.content}></RichText>}
            </div>
            {post.contentright && post.contentright.length > 0 ? <div className="flex-1">
               <RichText render={post.contentright}></RichText>
            </div> : null}
          </div>

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
  return {
    props: {
      doc,
    },
    revalidate: 4,
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