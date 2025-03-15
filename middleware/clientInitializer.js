const featureFlags = require('../config/features');
const AIService = require('../services/aiService');

function initializeClients(req, res, next) {
  // Set up AI capabilities based on feature flags
  const aiService = new AIService();
  
  // Attach to request object for use in routes
  req.services = {
    ...req.services,
    ai: aiService
  };
  
  // Add feature flags to client-side data
  res.locals.featureFlags = {
    claudeSonnetThinking: featureFlags.claude37SonnetThinking.enabled
  };
  
  next();
}

module.exports = initializeClients;
