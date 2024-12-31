import axios from 'axios';

type UserQueryParams = {
  take?: number;
  lastCursor?: string;
};

export const getAllUsers = async ({ take, lastCursor }: UserQueryParams) => {
  try {
    const res = await axios.get('/api/users', {
      params: {
        take,
        lastCursor,
      }
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users');
  }
}