import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="gird justify-center items-center text-center">
      <Spinner />
      <p>loading cabins</p>
    </div>
  );
}

export default loading;
