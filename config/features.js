const featureFlags = {
  // ...existing code...
  claude37SonnetThinking: {
    enabled: true,
    previewMode: true,
    description: 'Claude 3.7 Sonnet Thinking capabilities for enhanced AI responses',
    appliesTo: 'all-clients'
  },
  // ...existing code...
};

module.exports = featureFlags;
