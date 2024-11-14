const USER_DB = [{ username: "chanmin", password: "password" }];

// TODO: LOGIN
export const login = async (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USER_DB.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        document.cookie = `username=${username}`;
        resolve({ username: user.username });
      } else {
        reject(new Error("잘못된 유저이름, 패스워드입니다."));
      }
    }, 1_000);
  });
};

// TODO: PROFILE GET
export const getUser = async (): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const username = document.cookie.split("=").find((cookie) => {
        const [key, value] = cookie.split("=");
        return key.trim() === "username" ? value : undefined;
      });
      if (username) {
        resolve({ username: "chanmin" });
      }
      reject(new Error("User Not Found!"));
    }, 1_000);
  });
};
