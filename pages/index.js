
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

  console.log(doc)
  return (
    <div className={styles.container}>


      <main className="lg:max-w-6xl mx-auto px-4 ">
        <h1 className="text-7xl">
         Velkommen til Orion Revisjon
        </h1>

        <div className={styles.grid}>
          {doc ? <RichText render={doc.data.content}></RichText> : null}
        </div>
      </main>


    </div>
  )
}
