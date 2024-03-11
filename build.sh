#! /bin/bash

echo 'Make sure to install required pages first:'
echo 'sudo apt-get install curl autoconf automake libtool pkg-config'
echo 'Press enter to continue or Ctrl + C to stop.'
read -r

echo 'Now we are going to retrieve the libpostal library from github.'
echo 'Press enter to continue or Ctrl + C to stop.'
read -r
mkdir libpostal_repo
git clone https://github.com/openvenues/libpostal libpostal_repo
cd libpostal_repo || exit

echo 'Now we are going to bootstrap the build configuration.'
echo 'Press enter to continue or Ctrl + C to stop.'
read -r
./bootstrap.sh

echo "Please enter the directory to use as the data storage dir (default: \"$PWD/data\"):"
read -r DATADIR

echo 'Now we are going to configure the build.'
echo 'Press enter to continue or Ctrl + C to stop.'
read -r
if [ "$DATADIR" = '' ]; then
  DATADIR="$PWD/data"
fi

./configure --datadir="$DATADIR"

echo 'Now are going to make the build.'
echo 'Press enter to continue or Ctrl + C to stop.'
read -r
make

echo 'Build is ready. Now you must run:'
echo 'sudo make install'
echo 'sudo ldconfig'
echo 'yarn global add node-gyp'
echo 'yarn start'
