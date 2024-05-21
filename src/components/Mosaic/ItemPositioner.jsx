import { getRandomImageHeight } from '../../data/random'
import Item from './Item'

export default (props) => {
  const { items } = props

  return (
    <>
      {items.map((item) => {
        const { key, ...rest } = item
        const randomHeight = getRandomImageHeight(300, 600)
        return <Item key={key} rowEnd={randomHeight} {...rest} />
      })}
    </>
  )
}
