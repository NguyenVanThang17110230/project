const explorerConfig =
  process.env.ENABLE_API_EXPLORER === 'true'
    ? {
      mountPath: '/explorer',
      generateOperationScopedModels: true
    }
    : null

module.exports = {
  'loopback-component-explorer': explorerConfig
}
