import { useRef } from 'react'

export default (props) => {
  const { url, title, contents, profileImage, profileName, rowEnd } = props

  return (
    <div className='mosaic-item' style={{ gridRowEnd: `span ${rowEnd}` }}>
      <header>
        <img src={url} alt='header image' />
      </header>
      <article>
        <h2 className='single-line-ellipse-box'>{title}</h2>
        <div className='mosaic-item__contents single-line-ellipse-box'>
          {contents}
        </div>
      </article>
      <footer>
        <img src={profileImage} alt='profile image' />
        <h4>{profileName}</h4>
      </footer>
    </div>
  )
}
