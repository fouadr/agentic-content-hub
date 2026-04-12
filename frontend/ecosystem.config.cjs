module.exports = {
  apps: [
    {
      name: "brandsbakery",
      script: "node_modules/.bin/serve",
      args: "dist -l 4000 --single",
      interpreter: "none",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
