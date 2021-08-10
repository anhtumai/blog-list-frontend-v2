export function constructConfig(token: string) {
  return {
    headers: { Authorization: `bearer ${token}` },
  };
}
