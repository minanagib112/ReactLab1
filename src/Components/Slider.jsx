import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ['1.jpg', '2.jpg'],
            currentIndex: 0,
            isPlaying: false,
        };
    }

    componentDidMount() {
        // Start autoplay when component mounts
        this.startAutoplay();
    }

    componentWillUnmount() {
        // Clean up any timers when component unmounts
        clearInterval(this.autoplayInterval);
    }

    nextSlide = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
        }));
    };

    prevSlide = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length,
        }));
    };

    startAutoplay = () => {
        this.autoplayInterval = setInterval(this.nextSlide, 3000); // Change autoplay interval as needed
        this.setState({ isPlaying: true });
    };

    stopAutoplay = () => {
        clearInterval(this.autoplayInterval);
        this.setState({ isPlaying: false });
    };

    render() {
        const { images, currentIndex, isPlaying } = this.state;

        return (
            <div className="image-slider w-75 mt-5 mb-5">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

                <div className="controls">
                    <button onClick={this.prevSlide}>Previous</button>
                    <button onClick={this.nextSlide}>Next</button>
                    {isPlaying ? (
                        <button onClick={this.stopAutoplay}>Stop</button>
                    ) : (
                        <button onClick={this.startAutoplay}>Play</button>
                    )}
                </div>
            </div>
        );
    }
}

export default ImageSlider;
