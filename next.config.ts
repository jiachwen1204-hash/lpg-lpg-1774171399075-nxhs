import type { NextConfig } from 'next'

// output: 'standalone' is NOT used — Vercel deploys source and builds on their platform.
// Standalone mode forces expensive module tracing that wastes memory on the build worker.
const config: NextConfig = {}

export default config
