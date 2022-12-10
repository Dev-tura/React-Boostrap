import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Form/Form.css";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaFirefoxBrowser } from "react-icons/fa";

const handleClick = () => {
  alert("Form submitted sucessfully!");
};
function Formm() {
  return (
    <container className="container">
      <h4>Contact Form #04</h4>
      <div className="container_B">
        <Form>
          <br></br>
          <h2 className="font-color">Send us a Message</h2>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-color">Name</Form.Label>
            <Form.Control type="password" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-color">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-color">Phone Number</Form.Label>
            <Form.Control type="password" placeholder="Phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-color">Subject</Form.Label>
            <Form.Control type="password" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-color">Message</Form.Label>
            <Form.Control type="password" placeholder="Write us a short message" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className="font-color" type="checkbox" label="I AM HUMAN" />
          </Form.Group>
          {/* <Button classname="btn" variant="primary" type="submit">
        Submit
      </Button> */}
          <Button
            onClick={handleClick}
            variant="secondary"
            style={{ marginLeft: 73, backgroundColor: "#c93694" }}
          >
            Send Message
          </Button>{" "}
        </Form>
        <div className="contact-us">
          <br></br>
          <h3 className="margin">Contact Us</h3>
          <br></br>
          <br></br>
          <p className="margin">We're open for any suggestion or just to have a chat</p>
          <br></br>
          <br></br>
          <div className="contact-us_info">
            <h5>
              {" "}
              <ImLocation /> Address:
            </h5>
            <p> 7, Oreofero street, Shomolu-Lagos.Nigeria.</p>
          </div>
          <br></br>
          <br></br>
          <div className="contact-us_info">
            <h5>
              {" "}
              <BsTelephoneFill /> Phone:
            </h5>
            <p> 09014330178</p>
          </div>
          <br></br>
          <br></br>
          <div className="contact-us_info">
            <h5>
              {" "}
              <SiMinutemailer /> Email:
            </h5>
            <p> adelajatura@gmail.com</p>
          </div>
          <br></br>
          <br></br>
          <div className="contact-us_info">
            <h5>
              {" "}
              <FaFirefoxBrowser /> Website:
            </h5>
            <p> CodeitNigeria.com</p>
          </div>
        </div>
      </div>
    </container>
  );
}

export default Formm;
