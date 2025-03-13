#!/bin/bash

# Script to fix all route paths in kebab-case API folders

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
  
  # Create a temporary file with the correct route paths
  cat > "$api_folder/routes/$api_name.ts.new" << EOF
/**
 * $api_name router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/$api_name',
      handler: '$api_name.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/$api_name/:id',
      handler: '$api_name.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/$api_name',
      handler: '$api_name.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/$api_name/:id',
      handler: '$api_name.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/$api_name/:id',
      handler: '$api_name.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
EOF
  
  # Replace the original file with the new one
  mv "$api_folder/routes/$api_name.ts.new" "$api_folder/routes/$api_name.ts"
  
  echo "Fixed routes for $api_name"
done

echo "All route paths fixed!" 