import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hk5rzu58',
    dataset: 'production',
    cors: {
      origin: ["http://localhost:5174"],
      credentials: true
    }
  }
})
