import { Component} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { BsFillBriefcaseFill,BsLaptop } from "react-icons/bs";
import { FaFlask,FaCoffee } from "react-icons/fa";
import './App.css';



class Simplepage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          
          <div>
            {/* navbar */}
            <Navbar bg="transparent" expand="lg">
              <Container>
                  <Navbar.Brand href="#home"><img src="logo.png"/><br/><h6>Flat and trendy bootstrap template</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Nav className="justify-content-end">
                        <ul class="navbar-nav">
                          <li><a href="#">HOME</a></li>
                          <li><a href="#">FEATURES</a></li>
                          <li><a href="#">ABOUT</a></li>
                          <li><a href="#">CONTACT US</a></li>
                          <li><a href="#">SIGN IN</a></li>
                          <li><a href="#">SIGN UP</a></li>
                        </ul>
                      </Nav>
              </Container>
            </Navbar>
            {/* end navbar */}

            {/* slide */}
            <Carousel fade>

              <Carousel.Item>
                <Card className="bg-dark text-white">
                <Card.Img src="bg-1.jpg" alt="Card image" />
                <Card.ImgOverlay id="image1" style={{ width: '28rem' }}>
                  <Card.Title>Awesome features</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                  </Card.Text>
                  <a href="#" class="btn btn-primary">Read More</a>
                </Card.ImgOverlay>
                </Card>
              </Carousel.Item>


              <Carousel.Item>
                <Card className="bg-dark text-white">
                <Card.Img src="bg-2.jpg" alt="Card image" />
                <Card.ImgOverlay id="image1" style={{ width: '28rem' }}>
                  <Card.Title><h2>Fully responsive</h2></Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                  </Card.Text>
                  <a href="#" class="btn btn-primary">Read More</a>
                </Card.ImgOverlay>
                </Card>
              </Carousel.Item>


              <Carousel.Item>
                <Card className="bg-dark text-white">
                <Card.Img src="bg-3.jpg" alt="Card image" />
                <Card.ImgOverlay id="image1" style={{ width: '28rem' }}>
                  <Card.Title>Very customizable</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                  </Card.Text>
                  <a href="#" class="btn btn-primary">Read More</a>
                </Card.ImgOverlay>
                </Card>
              </Carousel.Item>

            </Carousel>
            {/* end sliding */} 
            
              <br></br>
            {/* div tag */}
            <div id="divtag"><h3> We've created more than <strong id="web"> 5000 websites</strong> this year!<a href="#" class="primary">Request A Quote</a></h3></div>
            {/* end div tag */}
               <br></br>

            {/* card group */}
            <CardGroup id="footer">
              <Card className="text-center" id="icons">
              <BsFillBriefcaseFill size ='50' id="icons"/>
                <Card.Body>
                  <Card.Title>Corporate business</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                  </Card.Text>
                  <a href="#" class="Learn">Learn More</a>
                </Card.Body>
              </Card>

              <Card className="text-center" id="icons">
                <BsLaptop size="50" id="icons" />
                <Card.Body>
                  <Card.Title>Corporate business </Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                  </Card.Text>
                  <a href="#" class="Learn">Learn More</a>
                </Card.Body>
              </Card>

              <Card className="text-center" id="icons">
                <FaFlask size="50" id="icons"/>
                <Card.Body>
                  <Card.Title>Coded carefully</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                  </Card.Text>
                  <a href="#" class="Learn">Learn More</a>
                </Card.Body>
              </Card>

              <Card className="text-center" id="icons">
                <FaCoffee size="50" id="icons"/>
                <Card.Body>
                  <Card.Title>Sit and enjoy</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                  </Card.Text>
                  <a href="#" class="Learn">Learn More</a>
                </Card.Body>
              </Card>
            </CardGroup>
            {/* end card group */}

            {/* footer */}
            <CardGroup>
              <Card id="footer">
              <Card.Body>
              <h3 id="footer">More About company</h3>
                <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Patrick Victoria <strong>CEO</strong>
                </footer>
                </blockquote>
              </Card.Body>
              </Card>
              
        
              <Card id="footer">
              <Card.Body>
              <h3 id="footer">More About company</h3>
                <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Patrick Victoria <strong>CEO</strong>
                </footer>
                </blockquote>
              </Card.Body>
              </Card>
              

              
              <Card id="footer">
              <Card.Body>
              <h3 id="footer">More About company</h3>
                <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Patrick Victoria <strong>CEO</strong>
                </footer>
                </blockquote>
              </Card.Body>
              </Card>
              
            </CardGroup>
            {/* end footer */}
            
          </div>
        )
    }
}
export default Simplepage


