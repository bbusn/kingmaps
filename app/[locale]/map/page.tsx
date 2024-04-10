import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import style from '@/app/styles/pages/map/map.module.css';

export default function Map() {
  const t = useTranslations('Map');

  return (
    <div className="flex-evenly-center flex-column ht-80-pct">
      <Header />
      <div className='flex-center-center flex-column gap-10'>
        <h1 className="flex-center-center flex-column">{t('Title')}</h1>
        <h2>{t('Description')}</h2>
      </div>
      <div className={`${style.map} flex-start-center flex-column`}>
        <div className='flex-center-start'>
        <Link href="map/gccd" className={style.gccd}>
          <Image src="/images/map/gccd.svg" alt="G.C.C.D image" width={50} height={40} />
        </Link>
        <Link href="map/pec" className={style.pec}>
          <Image src="/images/map/pec.svg" alt="P.E.C image" width={65} height={60} />
        </Link>
        </div>
        <div className='flex-center-center'>
          <div className='flex-center-center flex-column'>
            <Link href="map/mmi" className={style.mmi}>
              <Image src="/images/map/mmi.svg" alt="M.M.I image" width={80} height={38} />
            </Link>
            <div className='flex-center-center flex-column'>
              <Link href="map/gaco" className={style.gaco}>
                <Image src="/images/map/gaco.svg" alt="G.A.C.O image" width={65} height={70} />
              </Link>
              <Link href="map/sgm" className={style.sgm}>
                <Image src="/images/map/sgm.svg" alt="S.G.M image" width={95} height={83} />
              </Link>
            </div>
          </div>
          <div className='flex-center-center flex-column'>
            <div className='flex-center-center'>
              <Link href="map/corridors" className={style.corridors}>
                <Image src="/images/map/corridors.svg" alt="Corridors image" width={40} height={200} />
              </Link>
              <Link href="map/cafetaria" className={style.cafetaria}>
                <Image src="/images/map/cafetaria.svg" alt="Cafetaria image" width={37} height={55} />
              </Link>
            </div>
            <Link href="map/entrance" className={style.entrance}>
              <Image src="/images/map/entrance.svg" alt="Entrance image" width={20} height={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
