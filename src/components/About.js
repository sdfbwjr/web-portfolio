import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>about</h2>
                        <p>During my academic journey, I have honed my technical skills across a diverse range of programming languages and frameworks, including React.js, Node.js, and proficiency in C++, C#, Java, and JavaScript. My coursework has equipped me with a solid understanding of advanced data structures and algorithms, while practical projects have allowed me to apply this knowledge effectively.
                          Furthermore, my experience as a Recruiter & HR Specialist at 22ai has provided me with valuable insights into fostering effective communication, driving recruitment efforts, and enhancing employer branding. Leveraging the power of AI, I have contributed to efficient candidate evaluation processes and played a key role in developing and representing our employer brand across various platforms.
                          Additionally, my tenure as a Sales Consultant at Bell MTS allowed me to develop strong problem-solving skills and a customer-centric approach. By understanding and addressing the unique needs of each client, I consistently exceeded sales targets while prioritizing customer satisfaction, a testament to my ability to balance technical expertise with a focus on delivering exceptional experiences.
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>communication</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>problem-solving skills</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Adaptability</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
