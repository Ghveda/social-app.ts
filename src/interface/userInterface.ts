interface registerBody {
  username: string;
  email: string;
  password: string;
}

interface loginBody {
  email: string;
  password: string;
}

export { registerBody, loginBody };
