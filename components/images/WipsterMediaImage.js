import NextImage from 'next/image'
import styles from './WipsterMediaImage.module.css';

const WipsterMediaImage = () => {

    const {imageContainer} = styles; 


    return (
        <div className={imageContainer}>
          <NextImage src='/images/review-anywhere-devices.png' layout="fill"></NextImage>
        </div>
    )
}

export default WipsterMediaImage

