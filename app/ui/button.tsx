import Link from "next/link";
import { useLocale } from "next-intl";

export interface ButtonProps {
    text: string;
    href: string;
    accessKey?: string;
    type?: 'primary' | 'secondary';
}

export default function Button(props: ButtonProps) {
    const localeActive = useLocale();
    let buttonStyle = props.type + 'Button';

    return (
        <Link accessKey={props.accessKey} data-message={props.text} href={'/' + localeActive + props.href} className={props.type + '-button'}>
            {props.text}
        </Link>
    );
}