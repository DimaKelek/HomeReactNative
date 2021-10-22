export const firebaseErrorHandler = (errorCode?: string) => {
  if (errorCode === 'auth/user-not-found') {
    return {
      code: errorCode,
      message:
        'User not found or you entered the wrong data. If you haven`t account you can create it!',
    };
  } else if (errorCode === 'auth/invalid-email') {
    return {
      code: errorCode,
      message: 'Invalid-email, email must be example@example.com',
    };
  } else {
    return {
      code: '228',
      message: 'Some Error',
    };
  }
};
