import NextImage from 'next/image'
import styles from './IndexCardImage.module.css';

const IndexCardImage = ({url}) => {

    const {imageContainer} = styles; 


    return (
        <div className={imageContainer}>
          <NextImage src={url} layout="fill"></NextImage>
        </div>
    )
}

export default IndexCardImage

