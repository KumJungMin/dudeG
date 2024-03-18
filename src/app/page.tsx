import Image from 'next/image';
import Style from '../components/home/Home.module.scss';
import SignInButton from '../components/home/SignInButton';

import dudeGCover from '../styles/images/duduG_cover.png';

export default function Home(): JSX.Element {
  return (
    <main className={Style['home-page']}>
      <h1 className={Style['title']}>dudeG</h1>
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
