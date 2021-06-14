import { Component} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
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

            {/* div tag */}
            <div id="divtag"><h1>We've created more than <strong id="web">5000 websites</strong> this year!<a href="#" class="btn btn-primary">Request A Quote</a></h1></div>
            {/* end div tag */}
               

          </div>
        )
    }
}
export default Simplepage


