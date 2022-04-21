const Footer = () => {
  return (
    <footer className="bg-dark-26 text-white-f mt-16">
      <div className="container mx-auto">
        <div className="py-10">
          <img
            src="/images/components/footer/footer-logo.svg"
            height="20px"
            width="192px"
          />
        </div>
        <hr className="text-grey-da" />
      </div>
      <div className="container mx-auto">
        <div className="grid xs:grid-cols-1 md:grid-cols-3 my-10">
          <div>
            <div className="my-3">#UberEats</div>
            <div className="flex">
              <a href="https://www.facebook.com/UberEats" target="_blank">
                <img
                  className="cursor-pointer"
                  src="/images/components/footer/facebook.svg"
                />
              </a>
              <a href="https://twitter.com/UberEats" target="_blank">
                <img
                  className="cursor-pointer mx-3"
                  src="/images/components/footer/twitter.svg"
                />
              </a>
              <a href="https://www.instagram.com/ubereats/" target="_blank">
                <img
                  className="cursor-pointer"
                  src="/images/components/footer/instagram.svg"
                />
              </a>
            </div>
            <div className="my-3">About UberEats</div>
          </div>
          <div>
            <div className="my-3">Become a delivery partner</div>
            <div className="my-3">Become a reustarant partner</div>
            <div className="my-3">See all cities</div>
          </div>
          <div>
            <div className="my-3">Pricing</div>
            <div className="my-3">Help</div>
            <div className="my-3">FAQs</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <hr className="text-grey-da" />
        <div className="flex justify-center py-10">
          <div className="mx-2.5">
            <a href="https://apps.apple.com/ru/app/uber-eats-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B5%D0%B4%D1%8B/id1058959277">
              <img
                src="/images/components/footer/appstore.png"
                height="40px"
                width="120px"
              />
            </a>
          </div>
          <div className="mx-2.5">
            <a href="https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=ru&gl=US">
              <img
                src="/images/components/footer/googleplay.png"
                height="40px"
                width="140px"
              />
            </a>
          </div>
        </div>
        <hr className="text-grey-da" />
      </div>
      <div className="container mx-auto py-10">
        <div className="grid xs:grid-cols-1 md:grid-cols-3">
          <div>&copy; 2021 Uber Technologies Inc.</div>
          <div>Privacy</div>
          <div>Terms</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
