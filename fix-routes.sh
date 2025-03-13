#!/bin/bash

# Script to fix route paths in kebab-case API folders

# Directory containing API folders
API_DIR="./src/api"

# Process each kebab-case API folder
for api_folder in $(find "$API_DIR" -maxdepth 1 -type d -name "*-*"); do
  api_name=$(basename "$api_folder")
  
  echo "Processing routes for $api_name"
  
  # Skip if routes file doesn't exist
  if [ ! -f "$api_folder/routes/$api_name.ts" ]; then
    echo "Skipping $api_name as the routes file doesn't exist"
    continue
  fi
  
  # Fix the route paths by replacing "$api_name-s" with "$api_name"s
  sed -i '' "s/path: '\/$api_name-s/path: '\/$api_name"'s/g' "$api_folder/routes/$api_name.ts"
  
  echo "Fixed routes for $api_name"
done

echo "Route path fixing completed!" 