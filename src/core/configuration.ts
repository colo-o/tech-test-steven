type Config = {
  hosts: {
    movies: {
      baseURL: string;
    };
  };
};

const config: Config = {
  hosts: {
    movies: {
      baseURL: process.env.REACT_APP_API_URL || '',
    },
  },
};

export default config;
