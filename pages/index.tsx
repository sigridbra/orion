
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration'

import styles from '../styles/Home.module.css'

type Page = {
  uid: string;
  content: any;
}

type FrontPageContent =  {
  titletext: RichTextBlock[];
  frontpage: Page;
};


export default function Home({ titletext, frontpage}: FrontPageContent) {


  return (
    <div className={styles.container}>


      <main className="lg:max-w-5xl mx-auto px-4 mt-8 flex flex-col justify-center">
        <div className="text-5xl mb-8">
        {titletext ? <RichText render={titletext}></RichText> : "Velkommen til Orion Revisjon"}
        </div>

        <div className="text-lg xl:text-xl" >
          {frontpage ? <RichText render={frontpage.content}></RichText> : null}
        </div>
      </main>


    </div>
  )
}

export async function getStaticProps() {
  const client = Client();
  let response = await client.getSingle('frontpage', {});
  let pageContent : FrontPageContent | undefined = response.data;

  console.log(pageContent)
  const content = await client.getByUID('page', pageContent.frontpage.uid, {});
  const frontpage : Page | undefined = content.data;

  return {
    props: {
      titletext: pageContent.titletext,
      frontpage,
    },
    revalidate: 4,
  };
}