module.exports = {
    initialState: {
    count: 0,
  },
  channels: {
    viber: {
      enabled: true,
      sync: true,
      path: '/webhooks/viber',
      accessToken: process.env.VIBER_ACCESS_TOKEN,
sender:{
  name: 'xxx'
}
    },
  },


  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },

      file: {
        dirname: '.sessions',
      },

    },
  },
}