@echo off
SETLOCAL

echo Installing Node.js, npm, Git, and Godspeed using winget...

REM Check if winget is available
where winget >nul 2>nul
IF ERRORLEVEL 1 (
    echo Error: winget is not available. Please ensure you have Windows Package Manager installed.
    goto :end
)

REM Install Node.js (includes npm)
echo Installing Node.js...
winget install -e --id OpenJS.NodeJS
IF ERRORLEVEL 1 (
    echo Error: Node.js installation failed. Please check manually.
    goto :end
) ELSE (
    echo Node.js installation successful.
)

REM Install Git
echo Installing Git...
winget install -e --id Git.Git
IF ERRORLEVEL 1 (
    echo Error: Git installation failed. Please check manually.
    goto :end
) ELSE (
    echo Git installation successful.
)

REM Install Godspeed globally using npm
echo Installing Godspeed...
npm install -g @godspeedsystems/godspeed
IF ERRORLEVEL 1 (
    echo Error: Failed to install Godspeed. Please check your Node.js and npm setup.
) ELSE (
    echo Godspeed installation complete.
)

REM Version Checks
echo Checking installed versions...
echo -------------------------------------

REM Check Node.js version
echo Node.js version:
node -v
IF ERRORLEVEL 1 (
    echo Error: Node.js is not recognized.
) ELSE (
    echo Node.js is correctly installed.
)

REM Check npm version
echo npm version:
npm -v
IF ERRORLEVEL 1 (
    echo Error: npm is not recognized.
) ELSE (
    echo npm is correctly installed.
)

REM Check Git version
echo Git version:
git --version
IF ERRORLEVEL 1 (
    echo Error: Git is not recognized.
) ELSE (
    echo Git is correctly installed.
)

REM Check Godspeed version
echo Godspeed version:
godspeed --version
IF ERRORLEVEL 1 (
    echo Error: Godspeed is not recognized.
) ELSE (
    echo Godspeed is correctly installed.
)

echo -------------------------------------
echo Setup complete.
echo Restarting terminal to apply changes...
timeout /t 3 >nul
start "" %COMSPEC%
exit
ENDLOCAL
