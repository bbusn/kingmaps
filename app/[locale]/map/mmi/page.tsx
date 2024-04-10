import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Image from 'next/image';

export default function Mmi() {
  const t = useTranslations('Mmi');

  return (
    <div className="flex-center-center flex-column gap-30">
      <Header />
      <h1 className="flex-center-center flex-column">{t('Title')}</h1>
      <Image src="/images/departements/mmi.png" alt="M.M.I Image" width={250} height={150} />
      <h2 className="flex-center-center flex-column">{t('Description')}</h2>
    </div>
  );
}
