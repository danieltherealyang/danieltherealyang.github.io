import './std.css';

export default function EntryRow(props) {
  return (
    <div className='entry-row'>
      {props.children}
    </div>
  );
}