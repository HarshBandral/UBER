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

### 5. Captain Registration

**Endpoint:** `/captains/register`  
**Method:** `POST`  
**Description:** Registers a new captain.

#### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response

**Success (201):**

```json
{
  "_id": "64f1c8e5f1d2b3a456789013",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "status": "inactive",
  "socketId": null
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
    },
    {
      "msg": "Firstname must be of at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be of at least 6 characters",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be of at least 3 characters",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be of at least 3 characters",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be a number",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Vehicle type must be one of the following: car, motorcycle, auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```
### 6. Captain Login

**Endpoint:** `/captains/login`  
**Method:** `POST`  
**Description:** Logs in an existing captain.

#### Request Body

```json
{
  "email": "janedoe@example.com",
  "password": "password123"
}
```

#### Example Response

**Success (200):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64f1c8e5f1d2b3a456789013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
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

### 7. Get Captain Profile

**Endpoint:** `/captains/profile`  
**Method:** `GET`  
**Description:** Retrieves the profile of the currently logged-in captain. Requires authentication.

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
  "_id": "64f1c8e5f1d2b3a456789013",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "status": "inactive",
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

### 8. Captain Logout

**Endpoint:** `/captains/logout`  
**Method:** `GET`  
**Description:** Logs out the currently logged-in captain by blacklisting their token. Requires authentication.

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

### Validation Rules for Captain Registration

- **`fullname.firstname`**: Must be at least 3 characters long.
- **`fullname.lastname`**: Optional but must be at least 3 characters if provided.
- **`email`**: Must be a valid email address.
- **`password`**: Must be at least 6 characters long.
- **`vehicle.color`**: Must be at least 3 characters long.
- **`vehicle.plate`**: Must be at least 3 characters long.
- **`vehicle.capacity`**: Must be a number greater than or equal to 1.
- **`vehicle.vehicleType`**: Must be one of the following: `car`, `motorcycle`, `auto`.

---
