import React from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs';
import Parser from 'rss-parser';

import styles from '../styles/Home.module.css'

type CustomFeed = { foo: string };
type CustomItem = {
  link: string,
  title: string,
  content: string,
  isoDate: string
};

export const RssFeed = () => {

  const parser: Parser<CustomFeed, CustomItem> = new Parser({
    customFields: {
      feed: ['foo'],
      item: ['link', 'title', 'content']
    }
  });

  const [feed, setFeed] = useState(null);

  useEffect(() => {
    async function load() {
      // Note: some RSS feeds can't be loaded in the browser due to CORS security.
      // To get around this, you can use a proxy.
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
      const feedRes = await parser.parseURL(CORS_PROXY + 'https://www.revisorforeningen.no/oversikt-over-rss--atom-feeds/nyheter-rss/');
  
      setFeed(feedRes)
    }
    load();


  }, []);

  const renderItem = (item: CustomItem) => {
    const date = Date.parse(item.isoDate);
    return (
      <a href={item.link} className="block my-2 w-full">
        {new Date(date).toLocaleDateString()} - <b>{item.title}</b>
        <div>{item.content}</div>
      </a>
    )
  }

  return (
    <div className="text-base">
      <div className={styles.feedList}>
        {feed ? feed.items.slice(0, 15).map(item => renderItem(item)) : "Laster ..."}
      </div>
    </div>
  );
};




