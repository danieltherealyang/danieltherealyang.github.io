import './std.css';
import '@fontsource/source-sans-pro';

export default function SectionTitle(props) {
  return (
    <div className='section-title-container'>
      <header className='section-title'>
        {props.children}
      </header>
    </div>
  );
}