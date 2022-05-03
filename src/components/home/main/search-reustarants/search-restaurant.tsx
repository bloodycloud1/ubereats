

const SearchReustarant = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex items-center">
        <img className="absolute -my-1 h-4" src="/images/components/main/magnifier.svg" />
        <input
          className="border-b-2 pb-1 text-base px-5 w-full border-dark-26"
          type="text"
          placeholder="Введите название ресторана"
        />
      </div>
    </div>
  );
};

export default SearchReustarant;
