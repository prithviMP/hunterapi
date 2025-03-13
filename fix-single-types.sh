#!/bin/bash

# Script to fix single-type APIs
# This script will:
# 1. Find all single-type APIs
# 2. Fix their routes and controllers

# Directory containing API folders
API_DIR="./src/api"

# Find all single-type APIs
for api_folder in $(find "$API_DIR" -maxdepth 3 -name "schema.json"); do
  # Check if the schema is for a single type
  if grep -q '"kind": "singleType"' "$api_folder"; then
    # Extract API name from the path
    api_name=$(echo "$api_folder" | sed -E 's/.*\/api\/([^\/]+)\/content-types.*/\1/')
    
    echo "Found single-type API: $api_name"
    
    # Fix the controller
    cat > "$API_DIR/$api_name/controllers/$api_name.ts" << EOF
/**
 * $api_name controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::$api_name.$api_name', ({ strapi }) => ({
  // Single types don't have findOne and find methods but findOne and find routes
  // We need to override the default controller to handle this
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::$api_name.$api_name', {
      populate: ctx.query.populate,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    
    const entity = await strapi.entityService.update('api::$api_name.$api_name', 1, {
      data,
      populate: ctx.query.populate,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
EOF
    
    # Fix the routes
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
      method: 'PUT',
      path: '/$api_name',
      handler: '$api_name.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/$api_name',
      handler: '$api_name.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
EOF
    
    echo "Fixed single-type API: $api_name"
  fi
done

echo "All single-type APIs have been fixed!" 