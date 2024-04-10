'use client';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSelector() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  let pathname = usePathname();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`);
      router.replace(newPathname);
    });
  };
  
  return (
    <label className="locale-selector flex-center-center">
      <Image src={`/images/langs/${localeActive}.svg`} alt={`${localeActive} lang icon`} width={35} height={20} />
      <select
        defaultValue={localeActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='es'>Español</option>
        <option value='fr'>Français</option>
      </select>
    </label>
  );
}
