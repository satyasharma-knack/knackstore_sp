#!/bin/bash
# KnackStore — Start Frontend
# Requires: Node.js 18+

echo ""
echo "======================================"
echo "  KnackStore Frontend — Starting..."
echo "======================================"
echo ""

# Check Node
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js not found. Install Node 18+ from https://nodejs.org"
  exit 1
fi

NODE_VER=$(node -e "process.stdout.write(process.versions.node.split('.')[0])")
if [ "$NODE_VER" -lt 18 ] 2>/dev/null; then
  echo "ERROR: Node 18+ required. You have Node $NODE_VER."
  echo "Download from: https://nodejs.org"
  exit 1
fi

cd "$(dirname "$0")/frontend"

# Install dependencies if node_modules missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (first-time only — takes ~2 minutes)..."
  npm install
fi

echo ""
echo "Starting Angular on http://localhost:4200 ..."
echo ""
echo "Make sure the backend is already running on http://localhost:8080"
echo "Press Ctrl+C to stop."
echo ""

npm start
