import React from 'react'
import Error from 'next/error'

export default function Custom404() {
    return <Error statusCode={404} title="Siden finnes ikke"></Error>
  }