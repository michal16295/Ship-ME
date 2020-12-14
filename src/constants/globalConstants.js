const vars = {
  // Website
  SITE_NAME: "Ship-ME",
  BASE_API: "http://localhost:5000",

  // Headers
  COOKIE_JWT: "jwt_Ship-ME",
  HEADER_AUTH: "authorization",
  LOCAL_STR_TOKEN: "token",

  // Errors
  CONNECTION_ERROR: "Could not connect to server",
  SERVER_ERROR: "Internal server error",

  // Image
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5 MB

  // Validators
  // User
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 20,
  FULL_NAME_MIN_LENGTH: 1,
  FULL_NAME_MAX_LENGTH: 50,
};

export default vars;
