module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}
