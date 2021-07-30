module.exports = {
  send_log_data: [
    {
      reason: "buildError",
      emailName: "dach_transactional",
      count: 5,
    },
    {
      reason: "sendFailure",
      emailName: "dach_transactional",
      count: 5,
    },
    {
      reason: "buildError",
      emailName: "dach_blast",
      count: 2,
    },
    {
      reason: "sendFailure",
      emailName: "dach_blast",
      count: 5,
    },
    {
      reason: "unspecifiedError",
      emailName: "dach_onboarding",
      count: 11,
    },
  ],
  template_data: {
    dev_env: [
      {
        id: 123,
        assetType: {
          id: 220,
          name: "codesnippetblock",
          displayName: "Code Snippet Block",
        },
        name: "dev_cta",
        category: {
          id: 269615,
          name: "development",
          parentId: 269614,
        },
        content: "<html>Development Template!</html>",
      },
    ],
    prod_env: [
      {
        id: 234,
        assetType: {
          id: 220,
          name: "codesnippetblock",
          displayName: "Code Snippet Block",
        },
        name: "prod_cta",
        category: {
          id: 269615,
          name: "production",
          parentId: 269614,
        },
        content: "<html>Production Template!</html>",
      },
    ],
  },
};

console.log("Hello")
