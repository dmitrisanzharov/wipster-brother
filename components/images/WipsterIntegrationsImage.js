import NextImage from 'next/image'
import styles from './WipsterIntegrationsImage.module.css';

const WipsterIntegrationsImage = () => {

    const {imageContainer} = styles; 


    return (
        <div className={imageContainer}>
          <NextImage src='/images/integration-logos@2x.png' layout="fill"></NextImage>
        </div>
    )
}

export default WipsterIntegrationsImage

