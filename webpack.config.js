// webpack.config.js
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NG_APP_SUPABASE_URL': JSON.stringify(process.env.NG_APP_SUPABASE_URL),
      'process.env.NG_APP_SUPABASE_ANON_KEY': JSON.stringify(process.env.NG_APP_SUPABASE_ANON_KEY),
      'process.env.NG_APP_SUPABASE_SERVICE_ROLE_KEY': JSON.stringify(process.env.NG_APP_SUPABASE_SERVICE_ROLE_KEY)
    })
  ]
};
