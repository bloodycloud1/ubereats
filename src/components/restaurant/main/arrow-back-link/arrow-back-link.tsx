import Link from 'next/link';

const ArrowBackLink = () => {
  return (
    <div className="container mx-auto my-2">
      <Link href="/" as="/" passHref>
        <div className="flex items-center cursor-pointer hover:text-green-57">
          <img className="xs:w-8 xs:h-6" src="/images/components/main/arrow-left.svg" alt="arrow-back-link" />
          <div className="hover:text-green-57">Вернуться на главную страницу</div>
        </div>
      </Link>
    </div>
  );
};

export default ArrowBackLink;
