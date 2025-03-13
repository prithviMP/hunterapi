#!/bin/bash

# Script to check the API schemas created in the hunterapi project

API_DIR="/Users/prithvirajpillai/Documents/work/hunter/hunterapi/src/api"

# Check if the API directory exists
if [ ! -d "$API_DIR" ]; then
    echo "Error: API directory $API_DIR does not exist."
    exit 1
fi

# Print header
echo "============================================="
echo "API schemas in hunterapi project:"
echo "============================================="
echo

# Find all schema.json files and print their details
for schema in $(find $API_DIR -name "schema.json"); do
    # Extract API name from path
    api_name=$(echo $schema | sed -e "s|$API_DIR/||" -e 's|/content-types/.*||')
    
    # Extract display name and description from schema
    display_name=$(grep -A2 '"displayName":' $schema | grep -o '"[^"]*"' | head -1 | tr -d '"')
    description=$(grep -A2 '"description":' $schema | grep -o '"[^"]*"' | head -1 | tr -d '"')
    
    # Count attributes
    attr_count=$(grep -c '": {' $schema)
    
    echo "API: $api_name"
    echo "Display Name: $display_name"
    echo "Description: $description"
    echo "Attributes Count: $attr_count"
    echo "Path: $schema"
    echo "--------------------------------------------"
done

echo
echo "Total API schemas: $(find $API_DIR -name "schema.json" | wc -l)"
echo "=============================================" 