#!/bin/bash

# Script to fix API structure for Strapi v5
# This script will:
# 1. Convert PascalCase API folders to kebab-case
# 2. Create proper controller, service, and route files
# 3. Fix TypeScript errors

# Function to convert PascalCase to kebab-case
pascal_to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Directory containing API folders
API_DIR="./src/api"

# Process each API folder (excluding already kebab-case folders)
for api_folder in $(find "$API_DIR" -maxdepth 1 -type d -name "[A-Z]*"); do
  api_name=$(basename "$api_folder")
  kebab_name=$(pascal_to_kebab "$api_name")
  
  echo "Processing $api_name -> $kebab_name"
  
  # Skip if kebab-case folder already exists
  if [ -d "$API_DIR/$kebab_name" ]; then
    echo "Skipping $kebab_name as it already exists"
    continue
  fi
  
  # Create kebab-case directory structure
  mkdir -p "$API_DIR/$kebab_name/controllers"
  mkdir -p "$API_DIR/$kebab_name/services"
  mkdir -p "$API_DIR/$kebab_name/routes"
  mkdir -p "$API_DIR/$kebab_name/content-types/$kebab_name"
  
  # Copy schema.json if it exists
  if [ -f "$api_folder/content-types/$kebab_name/schema.json" ]; then
    cp "$api_folder/content-types/$kebab_name/schema.json" "$API_DIR/$kebab_name/content-types/$kebab_name/"
  fi
  
  # Create controller file
  cat > "$API_DIR/$kebab_name/controllers/$kebab_name.ts" << EOF
/**
 * $kebab_name controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::$kebab_name.$kebab_name' as any);
EOF
  
  # Create service file
  cat > "$API_DIR/$kebab_name/services/$kebab_name.ts" << EOF
/**
 * $kebab_name service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::$kebab_name.$kebab_name' as any);
EOF
  
  # Create routes file
  cat > "$API_DIR/$kebab_name/routes/$kebab_name.ts" << EOF
/**
 * $kebab_name router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/$kebab_name-s',
      handler: '$kebab_name.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/$kebab_name-s/:id',
      handler: '$kebab_name.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/$kebab_name-s',
      handler: '$kebab_name.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/$kebab_name-s/:id',
      handler: '$kebab_name.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/$kebab_name-s/:id',
      handler: '$kebab_name.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
EOF
  
  echo "Created files for $kebab_name"
done

echo "API structure fix completed!" 