import SlideHeader from "../components/layout/SlideHeader"
import Slide from '../assets/imgs/aboutslide.jpg'
import WelcomeSec from "../components/about/WelcomeSec"
import WorkProcess from "../components/about/WorkProcess"

const About = () => {
  return (
    <>
      <SlideHeader 
        title={'About Us'} 
        supTitle={'Know About Us'} 
        content={'Collaboratively administrate empowered markets plug and play networks dynamically procrastinated '} 
        background={Slide}
        />
      <WelcomeSec />
      <WorkProcess />
    </>
  )
}

export default About
