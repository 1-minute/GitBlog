import axios from 'axios';
import camelcase from 'camelcase-keys';

export const getUserProfile = (req, res) => {
  res.json({
    ok: true,
  });
};

export const getUserIssue = async (req, res) => {
  try {
    const owner = 'Q00';
    const repo = 'react-study';
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
    );
    const arr = camelcase(response.data, { deep: true });
    res.json(arr);
  } catch (err) {
    console.log(err);
  }
};
