#!/bin/bash

cd /Users/user/mobula/tokens-xyz-clone

echo "📦 Installing dependencies..."
npm install

echo "🔧 Setting up git..."
git add -A
git commit -m "initial commit: tokens.xyz clone with mobula"
git branch -M main
git push -f origin main

echo "🚀 Starting development server..."
npm run dev
