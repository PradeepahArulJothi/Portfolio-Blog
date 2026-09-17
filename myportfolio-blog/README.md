# MyPortfolio Blog

A professional portfolio and blog application built with:

- React + Vite
- React Router
- CSS3 responsive design
- Firebase Authentication (Email/Password)
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- Vercel deployment

## Project structure

```text
myportfolio-blog/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   ├── server.js
│   ├── vercel.json
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
└── README.md
```

## 1. Install prerequisites

Install:

1. Node.js LTS from https://nodejs.org/
2. Git from https://git-scm.com/
3. VS Code from https://code.visualstudio.com/
4. A Google account for Firebase
5. A MongoDB Atlas account from https://www.mongodb.com/atlas

Check Node and npm:

```bash
node -v
npm -v
```

## 2. Configure Firebase Authentication

1. Open https://console.firebase.google.com/
2. Click "Create a project".
3. Create a project, for example `myportfolio-blog`.
4. Open the project.
5. Select Authentication.
6. Click "Get started".
7. Open "Sign-in method".
8. Enable "Email/Password".
9. Go to Project settings.
10. Under "Your apps", click the Web icon `</>`.
11. Register the app.
12. Copy the Firebase web configuration values.

In `frontend`, create a file named `.env` from `.env.example`:

```env
VITE_FIREBASE_API_KEY=your_value
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_value
VITE_FIREBASE_APP_ID=your_value
VITE_API_URL=http://localhost:5000/api
```

Do not commit `.env`.

## 3. Configure MongoDB Atlas

1. Open https://www.mongodb.com/atlas
2. Create a free cluster.
3. Create a database user.
4. Go to Network Access.
5. Add your current IP for local development.
6. For a public Vercel backend, add `0.0.0.0/0` only if needed, preferably with strong database credentials and least-privilege access.
7. Click Connect > Drivers.
8. Select Node.js.
9. Copy the connection string.
10. Replace the username, password, and database name.

In `backend`, create `.env` from `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myportfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

If your password contains characters such as `@`, `#`, or `/`, URL-encode it.

## 4. Configure Firebase Admin for backend token verification

The frontend uses Firebase's public web configuration. The backend uses a Firebase Admin service account to verify Firebase ID tokens.

1. In Firebase Console, open Project settings.
2. Open Service accounts.
3. Click Generate new private key.
4. Download the JSON file.
5. Open the JSON file.
6. Convert the values into these environment variables:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
```

Never upload the service-account JSON file to GitHub.

## 5. Install and run the backend

Open a terminal:

```bash
cd backend
npm install
npm run dev
```

Expected output:

```text
MongoDB connected
Server running on port 5000
```

Test:

```text
http://localhost:5000/api/health
```

## 6. Install and run the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, normally:

```text
http://localhost:5173
```

Create a user through the Signup page. Then log in.

## 7. Blog API behavior

Public endpoint:

```http
GET /api/posts
GET /api/posts/:id
```

Protected endpoints:

```http
POST   /api/posts
PUT    /api/posts/:id
DELETE /api/posts/:id
POST   /api/contact
```

The frontend sends the Firebase ID token as:

```http
Authorization: Bearer YOUR_FIREBASE_ID_TOKEN
```

The sample app includes a "New Post" form for authenticated users. In a production application, add an admin role or custom claims before allowing every authenticated user to create or delete posts.

## 8. Deploy backend to Vercel

This project includes `backend/vercel.json`.

### Option A: Vercel dashboard

1. Push the project to GitHub.
2. Open https://vercel.com/
3. Click Add New > Project.
4. Import your GitHub repository.
5. Set the Root Directory to `backend`.
6. Add these environment variables:

```env
MONGODB_URI=your_atlas_connection_string
CLIENT_URL=https://YOUR-FRONTEND-DOMAIN.vercel.app
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY=your_private_key_with_\n
```

7. Deploy.
8. Copy the backend URL, for example:

```text
https://myportfolio-backend.vercel.app
```

The API health endpoint becomes:

```text
https://myportfolio-backend.vercel.app/api/health
```

### Option B: Vercel CLI

Install and log in:

```bash
npm install -g vercel
vercel login
```

Deploy:

```bash
cd backend
vercel
```

For production:

```bash
vercel --prod
```

Add environment variables in the Vercel dashboard under Project > Settings > Environment Variables.

## 9. Deploy frontend to Vercel

1. Create another Vercel project from the same GitHub repository.
2. Set Root Directory to `frontend`.
3. Add the frontend environment variables:

```env
VITE_FIREBASE_API_KEY=your_value
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_value
VITE_FIREBASE_APP_ID=your_value
VITE_API_URL=https://myportfolio-backend.vercel.app/api
```

4. Deploy.
5. Copy the frontend domain.
6. Update the backend's `CLIENT_URL` environment variable with the frontend domain.
7. Redeploy the backend if required.

## 10. Configure Firebase authorized domains

In Firebase Console:

1. Authentication > Settings.
2. Open Authorized domains.
3. Add your Vercel frontend domain, such as:

```text
myportfolio-blog.vercel.app
```

## 11. Git and .gitignore

From the project root:

```bash
git init
git add .
git commit -m "Initial portfolio blog application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/myportfolio-blog.git
git push -u origin main
```

The `.gitignore` files exclude:

- node_modules
- .env files
- build output
- Vercel local files
- service-account JSON files

## 12. Recommended resume project description

**MyPortfolio Blog | React, Node.js, Express.js, MongoDB Atlas, Firebase**

Developed a responsive personal portfolio and blog platform using React, React Router, Node.js, Express.js, MongoDB Atlas, and Firebase Authentication. Implemented protected routes, user authentication, dynamic blog post management, contact form persistence, reusable components, responsive layouts, and cloud deployment using Vercel.

## Important security notes

- Never commit `.env` files.
- Never expose the Firebase Admin private key in frontend code.
- Use an admin role/custom claim for blog management in production.
- Restrict MongoDB Atlas network access where possible.
- Use a strong database password.
