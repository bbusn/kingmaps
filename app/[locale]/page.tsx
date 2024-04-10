import {useTranslations} from 'next-intl';
import LocaleSelector from '../ui/layout/locale-selector';
import Button from '../ui/button';
import Image from "next/image";
import style from '../styles/pages/index/index.module.css';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
        <LocaleSelector />
        <div className='flex-center-center flex-column'>
          <Image src="/images/logo.png" alt="Logo picture" width={101} height={166} />
          <h1 id={style.title} className="flex-center-center flex-column">King<span>Maps</span></h1>
          <h2 data-message={t('Title')}>{t('Title')}</h2>
          <Image src="/images/iut.png" alt={t('Iut-image-alt')} width={250} height={152}/>
          <Button href="/begin" text={t('Begin')} accessKey="b" type="primary"/>
        </div>
    </>
  );
}
