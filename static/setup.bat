@echo off
SETLOCAL

echo Installing Node.js (version 18 or higher) and Git...

REM Check for Node.js installation
where node >nul 2>nul
IF ERRORLEVEL 1 (
    echo Node.js is not installed. Installing Node.js...
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.20.4/node-v18.20.4-x64.msi' -OutFile 'nodejs.msi'"
    start /wait msiexec.exe /i nodejs.msi /quiet
    del nodejs.msi
) ELSE (
    echo Node.js is already installed.
)

REM Check for Git installation
where git >nul 2>nul
IF ERRORLEVEL 1 (
    echo Git is not installed. Installing Git...
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.1/Git-2.42.0-64-bit.exe' -OutFile 'git-installer.exe'"
    start /wait git-installer.exe /SILENT
    del git-installer.exe
) ELSE (
    echo Git is already installed.
)

REM Install Godspeed
echo Installing Godspeed globally using npm...
npm install -g @godspeedsystems/godspeed

echo Setup complete.
ENDLOCAL
pause
