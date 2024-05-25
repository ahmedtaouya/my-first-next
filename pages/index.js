import Link from 'next/link';
import Profile from '../component/Profile';
// import styles from './Profile.module.css';
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <Profile />
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link> {/* Lien vers la page About */}
          </li>
          <li>
            <Link href="/projects">Projects</Link> {/* Lien vers la page Projects */}
          </li>
          <li>
            <Link href="/contact">Contact</Link> {/* Lien vers la page Contact */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;