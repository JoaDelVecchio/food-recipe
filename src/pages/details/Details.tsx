import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Details;
