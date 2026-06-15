#!/bin/bash
# KnackStore — Start Backend
# Requires: Java 17+

echo ""
echo "======================================"
echo "  KnackStore Backend — Starting..."
echo "======================================"
echo ""

# Check Java
if ! command -v java &> /dev/null; then
  echo "ERROR: Java not found. Install Java 17+ from https://adoptium.net"
  exit 1
fi

JAVA_VER=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ "$JAVA_VER" -lt 17 ] 2>/dev/null; then
  echo "ERROR: Java 17+ required. You have Java $JAVA_VER."
  echo "Download from: https://adoptium.net"
  exit 1
fi

cd "$(dirname "$0")/backend"

echo "Starting Spring Boot on http://localhost:8080 ..."
echo "H2 Database console: http://localhost:8080/h2-console"
echo "API docs (Swagger):  http://localhost:8080/swagger-ui.html"
echo ""
echo "Demo login: demo@knack.com / Demo@1234"
echo ""
echo "Press Ctrl+C to stop."
echo ""

./mvnw spring-boot:run
