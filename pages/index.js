
import { RichText } from 'prismic-reactjs';
import { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration'

import styles from '../styles/Home.module.css'

export default function Home() {

  const client = Client();

  const [doc, setDoc] = useState();

  useEffect(() => {
    async function load() {
      let response = await client.getSingle('frontpage');
      const content = await client.getByUID('page', response.data.frontpage.uid);
      setDoc(content);

    }
    load();

    
  }, []);

  return (
    <div className={styles.container}>


      <main className="lg:max-w-5xl mx-auto px-4 mt-8 flex flex-col justify-center">
        <h1 className="text-5xl mb-8">
         Velkommen til Orion Revisjon
        </h1>

        <div className="text-lg xl:text-xl" >
          {doc ? <RichText render={doc.data.content}></RichText> : null}
        </div>
      </main>


    </div>
  )
}
