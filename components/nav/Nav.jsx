import { BellFill, PersonFill} from 'react-bootstrap-icons';
import './nav.sass';
import NavUl from './NavUl';
import Image from 'next/image';

export default function Nav() {

  return (
    <nav>
      <div className="navOpsContain">
        <div className="logoContain">
          <Image src="/taskTrack.svg" alt="logo of the aplication web  TaskTrack" />
          <h2>TaskTrack</h2>
        </div>
        <NavUl/>
      </div>
      <div className="accountContain">
        <input type="text" placeholder="Buscar..." />
        <BellFill size={26} />
        <PersonFill size={26} />
      </div>
    </nav>
  );
}
