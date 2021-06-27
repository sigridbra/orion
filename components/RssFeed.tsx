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
  description: string,
  pubDate: string
};

export const RssFeed = () => {

  const parser: Parser<CustomFeed, CustomItem> = new Parser({
    customFields: {
      feed: ['foo'],
      item: ['link', 'title', 'description']
    }
  });

  const [feed, setFeed] = useState(null);

  useEffect(() => {
        async function load() {
      // Note: some RSS feeds can't be loaded in the browser due to CORS security.
      // To get around this, you can use a proxy.
      //const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://revisorforeningen.no/oversikt-over-rss--atom-feeds/nyheter-rss")
      .then(function(response) {
        return response.json();
      }).then(function(data){ 
        setFeed(data);
      });
    }
    load();
  }, []);

  const renderItem = (item: CustomItem) => {
    const date = Date.parse(item.pubDate);
    return (
      <a href={item.link} className="block my-3 w-full">
        {new Date(date).toLocaleDateString()} - <b>{item.title}</b>
        <div>{item.description}</div>
      </a>
    )
  }

  return (
    <div className="text-base">
      <div className={styles.feedList}>
        {feed ? feed.items.slice(0, 10).map(item => renderItem(item)) : "Laster ..."}
      </div>
    </div>
  );
};




