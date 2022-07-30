import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

type HeaderType = {
  children?: ReactNode;
};

const Header: FC<HeaderType> = ({ children }: any) => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="my-7">
            <Link href="/" passHref>
              <div className="relative">
                <Image src="/images/components/header/logo.svg" alt="ubereats" layout="fill" />
              </div>
            </Link>
          </div>
          <div className="flex items-center">{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
