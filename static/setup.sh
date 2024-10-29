#!/bin/bash

# Function to check the installed version of Node.js
check_node_version() {
    local version=$(node -v)
    local major_version=$(echo $version | grep -oP '(?<=v)\d+')

    if [ "$major_version" -ge 18 ]; then
        echo "Node.js version $version is already installed."
    else
        echo "Node.js version is lower than 18. Installing the latest Node.js..."
        install_node
    fi
}

# Install Node.js (version 18 or higher)
install_node() {
    echo "Installing Node.js (version 18 or higher)..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
}

# Install Git if not installed
echo "Checking for Git..."
if ! command -v git &> /dev/null
then
    echo "Git is not installed. Installing Git..."
    sudo apt-get install -y git
else
    echo "Git is already installed."
fi

# Install Node.js and npm if needed
echo "Checking for Node.js..."
if ! command -v node &> /dev/null
then
    install_node
else
    check_node_version
fi

# Verify npm installation
echo "Checking for npm..."
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Installing npm..."
    sudo apt-get install -y npm
else
    echo "npm is already installed."
fi

# Install Godspeed globally via npm
echo "Installing Godspeed globally using npm..."
sudo npm install -g @godspeedsystems/godspeed

# Verify installation
echo "Verifying Godspeed installation..."
if command -v godspeed &> /dev/null
then
    echo "Godspeed installed successfully."
else
    echo "Error: Godspeed installation failed."
    exit 1
fi

echo "Godspeed setup complete."

