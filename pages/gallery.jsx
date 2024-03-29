import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import Image from 'next/image'; // Import Image component from next/image

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      currentIndex: null
    };
  }

  openLightbox = (image, index) => {
    this.setState({
      selectedImage: image,
      currentIndex: index
    });
    document.body.style.overflow = 'hidden';
  };

  closeLightbox = () => {
    this.setState({
      selectedImage: null,
      currentIndex: null
    });
    document.body.style.overflow = 'auto';
  };

  nextImage = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const nextIndex = (currentIndex + 1) % images.length;
    this.setState({
      selectedImage: images[nextIndex],
      currentIndex: nextIndex
    });
  };

  prevImage = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    this.setState({
      selectedImage: images[prevIndex],
      currentIndex: prevIndex
    });
  };

  componentDidMount() {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    this.cleanup = () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }

  componentWillUnmount() {
    this.cleanup();
  }

  render() {
    const { images } = this.props;
    const { selectedImage, currentIndex } = this.state;

    return (
      <div>
        <Navigation />
        <Head>
          <title>Gallery</title>
        </Head>
        <h1 className="gallery-title">Gallery</h1>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} onClick={() => this.openLightbox(image, index)}>
              {/* Replace <img> with <Image /> */}
              <Image
                src={image}
                alt={`Image ${index}`}
                width={250}
                height={250}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={this.closeLightbox}>
            <button className="prev-btn" onClick={this.prevImage}>&#10094;</button>
            {/* Replace <img> with <Image /> */}
            <Image src={selectedImage} alt="Selected" width={800} height={600} />
            <button className="next-btn" onClick={this.nextImage}>&#10095;</button>
            <div className="close-btn" onClick={this.closeLightbox}>&times;</div>
          </div>
        )}

        <style jsx>{`
        .gallery-title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2em;
          color: #333;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 20px;
          justify-items: center;
        }
        .gallery-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .gallery-image:hover {
          transform: scale(1.05);
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .lightbox img {
          max-width: 80%;
          max-height: 80%;
          border-radius: 5px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
        }
        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          border: none;
          color: #fff;
          font-size: 2em;
          cursor: pointer;
          outline: none;
          transition: opacity 0.3s;
        }
        .prev-btn {
          left: 10px;
        }
        .next-btn {
          right: 10px;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #fff;
          font-size: 2em;
          cursor: pointer;
        }
        .prev-btn:hover,
        .next-btn:hover {
          opacity: 0.7;
        }
          /* Styles */
        `}</style>
         <Footer />
      </div>
    );
  }
}

export async function getStaticProps() {
  // Fetch images from the 'images' directory
  const fs = require('fs');
  const path = require('path');

  const directory = path.join(process.cwd(), 'public', 'images');
  const filenames = fs.readdirSync(directory);

  const images = filenames.map((filename) => `/images/${filename}`);

  return {
    props: {
      images,
    },
  };
}

export default Gallery;
