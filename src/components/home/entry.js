import './std.css';
export default function Entry(props) {
  return (
    <div className='entry'>
      <h5>{props.date}</h5>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}