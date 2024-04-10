"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ui/layout/header.module.css';
import LocaleSelector from './locale-selector';
import { useRouter } from 'next/navigation';
  
export default function Header() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <header className={`${styles.header} flex-between-center`}>
        <button onClick={goBack} className={`${styles.headerReturn} ${styles.headerLink} flex-center-center`}>
          <Image src="/images/icons/return.svg" alt="Return button" width={30} height={30} />
        </button>
        <Link href='/' accessKey="m" data-message="King Maps" role="link" aria-description="Back to first page link" className={`${styles.headerLink} flex-center-center`}>
            <Image src="/images/logo.png" alt="Kingmaps logo" width={27} height={44} />
            <div className={`${styles.headerTitle} flex-center-center flex-column lilita-one`}>
                <p>King</p>
                <p>Maps</p>
            </div>
        </Link>
        <LocaleSelector />
    </header>
  );
}
