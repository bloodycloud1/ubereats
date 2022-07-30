import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

type HeaderType = {
  children?: ReactNode;
};

const Header: FC<HeaderType> = ({ children }) => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <div className="my-7">
                <div className="relative h-[14px] w-[122px]">
                  <Image src="/images/components/header/logo.svg" alt="ubereats" layout="fill" />
                </div>
              </div>
            </a>
          </Link>
          <div className="flex items-center">{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
