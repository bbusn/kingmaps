import {redirect} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'es', 'fr'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) redirect('/en');
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});