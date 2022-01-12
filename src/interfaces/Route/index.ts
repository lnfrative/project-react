interface Route {
  base: string,
  route: {
    path: string,
    params: Record<string, string>,
  },
  aliases: Record<string, { path: string, alias: Record<string, string> }>
}

export default Route
