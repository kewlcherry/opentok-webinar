/**
 * Tokinar config file
 *
 * Copy this file to `config.js` in the same directory and edit that
 * file instead.
 */

module.exports = {

  /**
   * Application settings
   */
  app: {

    /**
     * Port to host the application on. Default: 8080.
     */
    port: 8080,

    /**
     * Directory for storage. Default: "./storage"
     */
    storage_dir: "./storage"
  },

  // ----------------------------------------------

  /**
   * TokBox OpenTok settings
   */
  opentok: {

    /**
     * API Key obtained from TokBox
     */
    api_key: "xxxx",

    /**
     * API Secret obtained from TokBox
     */
    api_secret: "xxxx"
  }

};
