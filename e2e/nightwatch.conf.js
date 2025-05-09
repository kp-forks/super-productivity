module.exports = {
  src_folders: ['../out-tsc/e2e/src'],
  output_folder: './e2e-test-results',
  custom_commands_path: 'out-tsc/e2e/commands',
  test_workers: {
    enabled: false,
    workers: 5,
  },
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require('chromedriver').path,
    cli_args: [],
  },

  test_settings: {
    default: {
      globals_path: '../out-tsc/e2e/globals.js',
      // globals_path: './globals.js', // Point to your globals file
      launch_url: 'https://0.0.0.0:4200',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--headless',
            '--disable-gpu',
            '--window-size=1280,800',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-browser-side-navigation',
            '--user-agent=NIGHTWATCH',
            `--binary=${process.env.CHROME_BIN}`,
          ],
          prefs: {
            'profile.default_content_setting_values.geolocation': 1,
            'profile.default_content_setting_values.notifications': 2,
          },
        },
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: './e2e-test-results/screenshots',
      },
      globals: {
        waitForConditionPollInterval: 500,
        waitForConditionTimeout: 10000,
        retryAssertionTimeout: 1000,
      },
    },
  },
};
