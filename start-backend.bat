@echo off
echo.
echo ======================================
echo   KnackStore Backend - Starting...
echo ======================================
echo.

where java >nul 2>&1
if %errorlevel% neq 0 (
  echo ERROR: Java not found. Install Java 17+ from https://adoptium.net
  pause
  exit /b 1
)

cd /d "%~dp0backend"

echo Starting Spring Boot on http://localhost:8080 ...
echo H2 Database console: http://localhost:8080/h2-console
echo API docs (Swagger):  http://localhost:8080/swagger-ui.html
echo.
echo Demo login: demo@knack.com / Demo@1234
echo.
echo Press Ctrl+C to stop.
echo.

mvnw.cmd spring-boot:run
pause
