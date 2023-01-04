import { useEffect, useState } from "react";

const useDetail = (movieId) => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "0ed1a1ec26d080c9365057c50145a153";

  const getDetail = async () => {
    setIsLoading(true);
    const results = await fetch(
      `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));

    setDetail(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return { detail, isLoading };
};

export default useDetail;
