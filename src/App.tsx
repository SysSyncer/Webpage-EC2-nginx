import "./App.css";
import EC2 from "./assets/EC2 Icon.svg";
import NGINX from "./assets/Nginx SVG Icon.svg";

function App() {
  return (
    <>
      <div className="message">
        <h1>
          This page is from an AWS EC2 <img src={EC2} alt="ec2" width={50} />{" "}
          instance with nginx <img src={NGINX} alt="nginx" width={50} />
        </h1>
      </div>
    </>
  );
}

export default App;
