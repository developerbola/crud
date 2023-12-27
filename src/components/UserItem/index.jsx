import { useParams } from "react-router-dom";
const index = () => {
  let { id } = useParams;
  return (
    <>
      <h1>user id: {id}</h1>
    </>
  );
};

export default index;
