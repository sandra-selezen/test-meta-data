import Head from 'next/head'
import React from 'react'

const Page1 = () => {
  return (
    <>
      <Head>
        <title>Page 1</title>
        <meta name="description" content="Page 1 description" key={'description'} />
        <meta property='og:title' content='Page 1' key={'og:title'} />
        <meta property='og:description' content='Page 1 description' key={'og:description'} />
      </Head>
      <div>Page 1 content</div>
    </>
  )
}

export default Page1