echo "Switching to branch main..."
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* dvazque7@45.79.228.103:/var/www/vaztech.co/

echo "Done!"