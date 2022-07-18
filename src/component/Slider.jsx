import { ArrowLeftOutlined } from '@mui/icons-material'
import React,{useState} from 'react'
import { sliderItems } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };
    return (
        <div className='slider'>
            <span className="Arraow" direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </span>
            <div className="Wrapper" slideIndex={slideIndex}>{sliderItems.map(item => (
                <div className="Slide" bg={item.bg} key={item.id}>
                    <div className="ImgContainer">
                        <img className='Image' src={item.img} />
                    </div>
                    <div className="InfoContainer">
                        <title>
                            {item.title}
                        </title>
                        <div className="Description">
                            {item.desc}
                        </div>
                        <button className="Button">
                            Go Now
                        </button>
                    </div>
                </div>
            ))}
            </div>
            <span className="Arraow" direction="right" onClick={() => handleClick("right")}>
                <ArrowLeftOutlined />
            </span>
        </div >
    )
}

export default Slider