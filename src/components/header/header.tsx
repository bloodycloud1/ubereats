import Link from 'next/link';

const Header = () => {
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
          <div className="flex items-center"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
