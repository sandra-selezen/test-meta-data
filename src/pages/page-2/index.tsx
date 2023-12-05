import Head from 'next/head'
import React from 'react'

const Page2 = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
        <meta name="description" content="Page 2 description" key={'description'} />
        <meta property='og:title' content='Page 2' key={'og:title'} />
        <meta property='og:description' content='Page 2 description' key={'og:description'} />
      </Head>
      <div>Page 2 content</div>
    </>
    
  )
}

export default Page2