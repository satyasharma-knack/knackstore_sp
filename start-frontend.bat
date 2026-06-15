@echo off
echo.
echo ======================================
echo   KnackStore Frontend - Starting...
echo ======================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
  echo ERROR: Node.js not found. Install Node 18+ from https://nodejs.org
  pause
  exit /b 1
)

cd /d "%~dp0frontend"

if not exist "node_modules" (
  echo Installing dependencies ^(first-time only — takes ~2 minutes^)...
  call npm install
)

echo.
echo Starting Angular on http://localhost:4200 ...
echo.
echo Make sure the backend is already running on http://localhost:8080
echo Press Ctrl+C to stop.
echo.

call npm start
pause
