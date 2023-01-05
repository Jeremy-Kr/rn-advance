import { useQuery } from "react-query";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "0ed1a1ec26d080c9365057c50145a153";

const getDetail = (params) => {
  const [_, movieId] = params.queryKey;
  return fetch(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());
};

const useDetail = (movieId) => {
  const { data: detail, isLoading } = useQuery(["detail", movieId], getDetail);

  return { detail, isLoading };
};

export default useDetail;
