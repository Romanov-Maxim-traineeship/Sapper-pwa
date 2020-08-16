const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/Sapper-pwa",
  {
    branch: "master",
    repo: "https://github.com/Romanov-Maxim-traineeship/Sapper-pwa.git",
    user: {
      name: "Romanov-Maxim-traineeship",
      email: "romanov.maxim.98@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
