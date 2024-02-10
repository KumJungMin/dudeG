import Image from 'next/image';
import Style from './home.module.scss';
import SignInButton from '../components/home/SIgnInButton';

export default function Home(): JSX.Element {
  return (
    <main className={Style['home-page']}>
      <Image
        src="/"
        width={280}
        height={280}
        style={{
          objectFit: 'contain',
          backgroundColor: '#D9D9D9',
        }}
        alt="Picture of the author"
      />
      <SignInButton />
    </main>
  );
}
