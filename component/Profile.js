import styles from './Profile.module.css'; // Importation des styles via un module CSS
import Image from 'next/image'; // Importation du composant Image de Next.js

const Profile = () => {
  return (
    <div className={styles.profileContainer}> {/* Utilisation des styles */}
      <Image
        src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" // Chemin de l'image dans le dossier public
        alt="Profile Picture"
        width={150}
        height={150}
        className={styles.profileImage}
      />
      <h1 className={styles.profileName}>Mon Nom</h1>
    </div>
  );
};

export default Profile;