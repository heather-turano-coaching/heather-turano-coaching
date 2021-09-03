module.exports = (api) => {
  const inProduction = api.env("production");
  const inDevelopment = api.env("development");

  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "styled-components",
        {
          ssr: true,
          pure: true,
          displayName: inDevelopment,
          fileName: inDevelopment,
          preprocess: inProduction
        }
      ]
    ].filter(Boolean)
  };
};
