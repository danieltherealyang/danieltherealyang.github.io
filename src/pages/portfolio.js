import './portfolio.css';

// export default function Portfolio() {
//   return(
//     <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
//       <div className="box">
//         <span>Empty</span>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { CenterModal } from "../components/modal";
import { PhoneFilled, MailFilled, HomeFilled } from '@ant-design/icons';
import { ContactButton } from '../components/button';

export default function Portfolio() {
  const [ contactVisible, setContactVisible ] = useState(false);
  return (
    <div style={{width: '100%', height: '200vh'}}>
      <CenterModal
        visible={contactVisible}
        content={<ContactInfo/>}
        onClickOutside={() => setContactVisible(false)}
      >
        <ContactButton onClick={() => setContactVisible(true)}/>
      </CenterModal>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-card rainbow-glow">
      <span style={{fontSize: '18px'}}>Daniel Yang</span>
      <div className="contact-line-container">
        <div className="contact-line">
          <PhoneFilled style={{color: 'white'}}/>
          <span>858-205-3058</span>
        </div>
        <div className="contact-line">
          <MailFilled style={{color: 'white'}}/>
          <span>danielyangkang@gmail.com</span> 
        </div>
        <div className="contact-line">
          <HomeFilled style={{color: 'white'}}/>
          <span>San Diego, CA</span>
        </div>
      </div>
    </div>
  );
}