import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type HeaderType = {
  children?: ReactNode;
};

const Header: FC<HeaderType> = ({ children }: any) => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="my-7">
            <Link href="/">
              <a>
                <img src="/images/components/header/logo.svg" alt="ubereats" />
              </a>
            </Link>
          </div>
          <div className="flex items-center">{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
