const config = {}

// Domains
config.domains = {}

config.domains.api = 'http://localhost:3000'

if(process.env.NODE_ENV == 'production') {
    config.domains.api = 'https://u8kwyeo7xf.execute-api.us-east-1.amazonaws.com'
}

export default config