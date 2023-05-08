import { Image } from "react-bootstrap";
import useFetch from "../../hooks";

export const ImageView = ({ item, type }) => {
  let { data } = {};
  if (type === "Candidato") {
    const { data: Foto } = useFetch(`/file/${item?.photoUrl}`);
    data = Foto;
  } else {
    const { data: Foto } =
      type === "fotoUrl"
        ? useFetch(`/file/${item?.fotoUrl}`)
        : useFetch(`/file/${item?.logo}`);
    data = Foto;
  }
  return (
    <>
      <Image
        style={{ width: "15%", cursor: "pointer" }}
        className="rounded img-fluid me-3"
        onClick={() => (window.location.href = `${data?.link}`)}
        src={data?.link}
        alt={item?.nome}
      />
    </>
  );
};
