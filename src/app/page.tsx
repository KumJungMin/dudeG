import Image from 'next/image';
import styles from '../components/home/Home.module.scss';
import SignInButton from '../components/home/SignInButton';

import dudeGCover from '../styles/images/duduG_cover.png';

export default function Home(): JSX.Element {
  return (
    <main className={styles['home-page']}>
      <h1 className={styles['title']}>dudeG</h1>
      <Image
        src={dudeGCover}
        width={390}
        height={390}
        style={{ objectFit: 'contain' }}
        alt="A mole holding a gift"
      />
      <SignInButton />
    </main>
  );
}
