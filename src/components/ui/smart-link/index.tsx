import Link from 'next/link';

import { TLink } from '@/types/link';

type TProps = {
  data: TLink;
  className: string;
};

const SmartLink = ({ data, className }: TProps) => {
  return (
    <>
      {data.linkExternal ? (
        <a href={data.linkExternal.href} className={className}>
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
};

export default SmartLink;
