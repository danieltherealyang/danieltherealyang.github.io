import './std.css';
import "@fontsource/merriweather";

export default function Statement() {
  return (
    <div className="statement-container">
      <Text/>
    </div>
  );
}

function Text() {
  return (
    <p style={
      {
        fontFamily: "Merriweather",
        fontSize: "14px",
        fontStyle: "italic",
        lineHeight: "48px"
      }
    }>
      Hello! I'm a student studying Computer Science at UCLA. My main interests are cybersecurity, algorithms, 
      and cloud computing/distributed systems. I use many different tools, but the ones that I use most frequently 
      are C/C++, Python, SQL, Javascript, HTML/CSS, and Java.
    </p>
  );
}