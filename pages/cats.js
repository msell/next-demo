import React from 'react'
import Layout from '../components/Layout'
import 'isomorphic-fetch'

export default class Cats extends React.Component {
    static async getInitialProps () {
        console.log('fetching cats')
      const res = await fetch('http://api.giphy.com/v1/gifs/search?q=cats&api_key=943a99a9d68c4e07a007228b4e9d9321')
      const json = await res.json()
      return { cats: json.data.map(c => (c.images.fixed_height_downsampled.url)) }
    }

    render () {
      return (
          <Layout>
        <div>
          {this.props.cats.map((c,i) => (<img key={i} src={c}/>))}
        </div>
        <button name="cats_button">Moar Cats!!</button>

        </Layout>
      )
    }
  }
