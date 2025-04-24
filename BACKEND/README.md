# Backend API Documentation

## Routes

### 1. User Registration

**Endpoint:** `/users/register`  
**Method:** `POST`  
**Description:** Registers a new user.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Example Response

**Success (201):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c8e5f1d2b3a456789012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

**Error (400):**

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

### 2. User Login

**Endpoint:** `/users/login`  
**Method:** `POST`  
**Description:** Logs in an existing user.

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Example Response

**Success (200):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c8e5f1d2b3a456789012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

**Error (401):**

```json
{
  "message": "Invalid email or password"
}
```

---

### 3. Get User Profile

**Endpoint:** `/users/profile`  
**Method:** `GET`  
**Description:** Retrieves the profile of the currently logged-in user. Requires authentication.

#### Headers

```json
{
  "Authorization": "Bearer <your-token>"
}
```

#### Example Response

**Success (200):**

```json
{
  "_id": "64f1c8e5f1d2b3a456789012",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "socketId": null
}
```

**Error (401):**

```json
{
  "message": "Unauthorized"
}
```

---

### 4. User Logout

**Endpoint:** `/users/logout`  
**Method:** `GET`  
**Description:** Logs out the currently logged-in user by blacklisting their token. Requires authentication.

#### Headers

```json
{
  "Authorization": "Bearer <your-token>"
}
```

#### Example Response

**Success (200):**

```json
{
  "message": "Logged out"
}
```

**Error (401):**

```json
{
  "message": "Unauthorized"
}
```

---

## Validation Rules

- **`fullname.firstname`**: Must be at least 3 characters long.
- **`fullname.lastname`**: Optional but must be at least 3 characters if provided.
- **`email`**: Must be a valid email address.
- **`password`**: Must be at least 6 characters long.

---

## Environment Variables

Ensure the following environment variables are set in the `.env` file:

- `PORT`: The port on which the server runs (default: `3000`).
- `DB_CONNECT`: MongoDB connection string.
- `JWT_SECRET`: Secret key for generating JSON Web Tokens.

---