import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box } from "@mui/system";
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'


const animation = { duration: 14000, easing: (t: number) => t }


export const SliderKeen = () => {



  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    
    <div ref={sliderRef} className="keen-slider" style={{ margin:0}}>

      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/1.png' alt='asdas' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/2.png' alt='asdas' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/3.png' alt='asdas' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/4.png' alt='asdas' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/5.png' alt='asdas' />
        </Box>
      </div>
      <div className="keen-slider__slide ">
        <Box>
          <Image width={500} height={500 } src='/6.png' alt='asdas' />
        </Box>
      </div>




    </div>
  );
};
