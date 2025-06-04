import Link from 'next/link';

import { TLink } from '@/types/link';

type TProps = {
  data: TLink;
  className: string;
};

const SmartLink = ({ data, className }: TProps) => {
  if (data.pdf) {
    return (
      <a href={data.pdf.asset.url} target='_blank' className={className}>
        {data.title}
      </a>
    );
  } else {
    return (
      <>
        {data.linkExternal ? (
          <a
            href={data.linkExternal.href}
            target={data.linkExternal.blank ? '_blank' : '_self'}
            className={className}
          >
            {data.linkExternal.label}
          </a>
        ) : data.linkInternal ? (
          <Link
            href={data.linkInternal.reference.slug.current}
            className={className}
          >
            {data.linkInternal.label}
          </Link>
        ) : (
          ''
        )}
      </>
    );
  }
};

export default SmartLink;
