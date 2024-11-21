const BASE_URL = process.env.BASE_BACKEND_URL;

const getPosts = (url: string = `${BASE_URL}/post/list`) => {
  const request = new Request(
    url, {
      method: "GET",
      headers: {"token": "auth-token"},
    }
  );
  return fetch(request);
};

const queryRunner = {
  getPosts,
};

export default queryRunner;
