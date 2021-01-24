import React from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs';

import styles from '../styles/Home.module.css'

interface Props {
  internalRoute: boolean;
}

interface FooterModel {
  content: any;
  contentmiddle: any;
  contentright: any;
}

export const Footer = ( ) => {

  const client = Client();

  const [footer, setFooter] = useState<FooterModel>();

  useEffect(() => {
    async function load() {

      let footerResponse = await client.getSingle('footer', null);
      setFooter(footerResponse.data)
    }
    load();

    
  }, []);

  return (
    <footer className={styles.footer}>
    <div className="lg:max-w-5xl mx-auto px-4 my-4 flex flex-row justify-between">
      <div>{footer ? <RichText render={footer?.content}></RichText> : null}</div>
      <div>{footer ? <RichText render={footer?.contentmiddle}></RichText> : null}</div>
      <div>{footer ? <RichText render={footer?.contentright}></RichText> : null}</div>
    
    </div>
  </footer>
  );
};


  
  
