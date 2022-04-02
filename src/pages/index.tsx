import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/reustarants");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }: { data: [] }) => {
  console.log(data);
  return (
    <div>
      <div className="text-3xl font-bold underline">Welcome to ubereats</div>
      <div>
        {data.map((item) => {
          let { id, name } = item;
          return <div key={id}>{name}</div>;
        })}
      </div>
    </div>
  );
};

// const Home: FC<{ data: [] }> = ({ data }) => {
//   console.log(data);
//   return (
//     <div>
//       <div className="text-3xl font-bold underline">Welcome to ubereats</div>
//       <div>
//         {data.map((item: any) => {
//           return <div key={item.id}>{item.name}</div>;
//         })}
//       </div>
//     </div>
//   );
// };

export default Home;
