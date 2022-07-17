exports.module = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "current",
      },
    },
  ],
  "@babel/preset-typescript",
];
export const ignore = ["**/*.test.ts"];
