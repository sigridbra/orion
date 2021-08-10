
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Client } from '../prismic-configuration'

import styles from '../styles/Home.module.css'

type Page = {
  uid: string;
  content: any;
}
 
type Image = {
  url: string;
  altText: string;
}
type FrontPageContent =  {
  titletext: RichTextBlock[];
  frontpage: Page;
  image: Image;
};


export default function Home({ titletext, frontpage, image}: FrontPageContent) {


  return (
    <div className={styles.container}>


      <main className="lg:max-w-5xl mx-auto px-4 mt-8 flex flex-col justify-center">
        <div className="text-5xl mb-8">
         
        {titletext ? <RichText render={titletext}></RichText> : "Velkommen til Orion Revisjon"}
        </div>

        <div className="text-lg xl:text-xl" >
          {frontpage ? <RichText render={frontpage.content}></RichText> : null}
          <img src={image.url} alt={image.altText} className="mt-4 object-cover w-full h-96"></img>
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
      image: pageContent.image
    },
    revalidate: 4,
  };
}