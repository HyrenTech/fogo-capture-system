#!/bin/bash
set -e

echo "Cleaning up corrupted dependencies..."
rm -rf node_modules
rm -f package-lock.json

echo "Installing dependencies fresh..."
npm install

echo "Dependencies fixed successfully!"
