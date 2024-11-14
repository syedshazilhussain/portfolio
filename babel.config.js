module.exports = {
    presets: [
      "@babel/preset-env",  // Modern JavaScript ko older versions mein convert karta hai
      "@babel/preset-react" // React JSX ko convert karta hai
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import" // Dynamic imports ke liye support deta hai
    ]
  };
  