#!/bin/bash

# Script to copy schema files from PascalCase folders to kebab-case folders

# Function to convert PascalCase to kebab-case
pascal_to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Directory containing API folders
API_DIR="./src/api"

# Process each PascalCase API folder
for api_folder in $(find "$API_DIR" -maxdepth 1 -type d -name "[A-Z]*"); do
  api_name=$(basename "$api_folder")
  kebab_name=$(pascal_to_kebab "$api_name")
  
  echo "Processing schemas for $api_name -> $kebab_name"
  
  # Skip if kebab-case folder doesn't exist
  if [ ! -d "$API_DIR/$kebab_name" ]; then
    echo "Skipping $kebab_name as the folder doesn't exist"
    continue
  fi
  
  # Create content-types directory if it doesn't exist
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
done

echo "Schema file copying completed!" 