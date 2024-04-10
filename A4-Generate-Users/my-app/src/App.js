import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>
      <h1> Alejandro Lopez </h1>
    </div>
    <br />
    <a href="https://github.com/lopezalejandro23"> My Github</a> < br/>
    <a href="https://www.linkedin.com/in/alejandro-lopez-277877117/"> My linkedin</a>
    <br />
    <button type="button">Click Me!</button>

    <button type="button2">Press Me!</button>

    <p>
      I am 26 year old transfer student. I grew up in Ontario, California and
      graduated from Chino High School. I come from a family of 5 with an older
      sister and a younger brother. My family is from Culiacan, Mexico which is
      considered more in northern part of Mexico. My favorite food to eat at the
      moment is sopes.
    </p>

  <h2> My engagement </h2>
  <p>
    This past summer I proposed to my fiancee Carianne Chavez. We recently
    celebrated 6 years dating this past January. Carianne currently works for
    the city of Manhatten Beach for the Traffic Engineering division and while
    pursuing her Master's degree at CSULB. Our favorite past time is visiting
    new baseball stadiums all around the country since one of our traveling
    goals to visit all 30 stadiums. So far we've been to 10/30 with some of our
    favorites being; Fenway Park, Wrigley Stadium, and Petco Park. She's a big
    Los Angeles Dodgers fan while unfortunately I like the Los Angeles Angels.
  </p>
  <font size={-2}>
    {" "}
    <em> Thanksgiving 2023 </em>{" "}
  </font>
  <br />
    <img src="carianne.jpeg" height={600} width={500} />

  <h3> Work and Hobbies</h3>
  <p>
    I currently work at UPS as a Feeder supervisor. My position is called "Yard
    Control" where I supervisor the shifter employes. I am the person right
    before the package car driver as my job is to ensure you're packages move
    from east coast to the west coast or from hub to hub. My favorite sports
    teams are the{" "}
    <strong> Los Angeles Angels, Los Angeles Clippers, and Arsenal FC. </strong>{" "}
    My dad has always been a huge fan of the underdog teams so growing up
    basketball and baseball were always on so naturally I also rooted for those
    teams. I started rooting for Arsenal because growing up I used to play for
    Sunday League Soccer team named Arsenal and I've followed the team ever
    since. Some of my hobbies outside of watching and playing sports are going
    to the gym, watching anime, and playing video games. My favorite anime is
    One Piece and my favorite game to play is Rocket League.
  </p>
  <p>
    <font size={-2}>
      {" "}
      <em> Emirates Stadium. Home of Arsenal FC </em>{" "}
    </font>
    < br/>
    <img src="arsenal.jpeg" height={400} width={600} />

  </p>
</>
  );
}

export default App;
