import { useState } from 'react'
import { useEffect } from 'react'
import { getRandomContents, getRandomTitle } from '../../data/article'
import { getRandomProfileImage, getRandomProfileName } from '../../data/profile'
import ItemPositioner from './ItemPositioner'

const MAX_ITEM_COUNT = 50
export default (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchRandomImages() {
      let fetchedItems = []
      for (let i = 0; i < MAX_ITEM_COUNT; i++) {
        const resp = await fetch('https://source.unsplash.com/random/800x600')
        const blob = await resp.blob()
        const url = URL.createObjectURL(blob)

        const title = getRandomTitle()
        const contents = getRandomContents()
        const profileImage = getRandomProfileImage()
        const profileName = getRandomProfileName()
        fetchedItems.push({
          key: i,
          url,
          title,
          contents,
          profileImage,
          profileName,
        })
      }

      setItems(fetchedItems)
    }

    fetchRandomImages()
  }, [])
  
  return (
    <section className='max-container mosaic-container'>
      {items.length === 0 ? (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p>Loading....</p>
        </div>
      ) : (
        <ItemPositioner items={items}/>
      )}
    </section>
  )
}
