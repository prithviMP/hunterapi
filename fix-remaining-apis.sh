#!/bin/bash

# Comprehensive script to fix all API routes and structures
# This script will:
# 1. Process all API folders (both PascalCase and kebab-case)
# 2. Create proper controller, service, and route files for all APIs
# 3. Fix route paths to use the correct format

# Directory containing API folders
API_DIR="./src/api"

# Function to convert PascalCase to kebab-case
pascal_to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Process all API folders
for api_folder in $(find "$API_DIR" -maxdepth 1 -type d | grep -v "^$API_DIR$"); do
  api_name=$(basename "$api_folder")
  
  # Skip special folders
  if [[ "$api_name" == "." || "$api_name" == ".." ]]; then
    continue
  fi
  
  # Convert to kebab-case if needed
  if [[ "$api_name" =~ [A-Z] ]]; then
    kebab_name=$(pascal_to_kebab "$api_name")
    echo "Converting $api_name to $kebab_name"
    
    # Skip if kebab-case folder already exists
    if [ -d "$API_DIR/$kebab_name" ]; then
      echo "Skipping conversion as $kebab_name already exists"
    else
      # Create kebab-case directory structure
      mkdir -p "$API_DIR/$kebab_name/controllers"
      mkdir -p "$API_DIR/$kebab_name/services"
      mkdir -p "$API_DIR/$kebab_name/routes"
      mkdir -p "$API_DIR/$kebab_name/content-types/$kebab_name"
      
      # Find schema.json in the PascalCase folder (search recursively)
      schema_file=$(find "$api_folder" -name "schema.json" | head -n 1)
      
      if [ -n "$schema_file" ]; then
        echo "Found schema file: $schema_file"
        # Copy schema.json to the kebab-case folder
        cp "$schema_file" "$API_DIR/$kebab_name/content-types/$kebab_name/schema.json"
        echo "Copied schema file to $API_DIR/$kebab_name/content-types/$kebab_name/schema.json"
      else
        echo "No schema.json found for $api_name"
      fi
    fi
    
    # Use kebab-case for further processing
    api_name="$kebab_name"
  fi
  
  echo "Processing API: $api_name"
  
  # Create controller file
  mkdir -p "$API_DIR/$api_name/controllers"
  cat > "$API_DIR/$api_name/controllers/$api_name.ts" << EOF
/**
 * $api_name controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::$api_name.$api_name' as any);
EOF
  
  # Create service file
  mkdir -p "$API_DIR/$api_name/services"
  cat > "$API_DIR/$api_name/services/$api_name.ts" << EOF
/**
 * $api_name service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::$api_name.$api_name' as any);
EOF
  
  # Create routes file
  mkdir -p "$API_DIR/$api_name/routes"
  cat > "$API_DIR/$api_name/routes/$api_name.ts" << EOF
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
  
  echo "Created/updated files for $api_name"
done

echo "All APIs have been fixed!" 