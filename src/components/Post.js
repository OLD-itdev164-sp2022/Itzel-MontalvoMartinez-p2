import React from 'react'
//import PropTypes from 'prop-types'
import marked from 'marked'

const Post = ({article}) => {
    console.log(article)
    const {name, featuredImage, description} = article.fields
    const postDescription = marked(description)
  return (
    <div className='post'>
        <h2 className='title'>{name}</h2>
        {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name}/>}
        <section dangerouslySetInnerHTML={{ html: postDescription }} ></section>
    </div>
  )
}

export default Post