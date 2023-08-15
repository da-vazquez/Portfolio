echo "Switching to branch main..."
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* {process.env.SERVER_USERS}@{process.env.SERVER_HOST}:/var/www/vaztech.co/

echo "Done!"
