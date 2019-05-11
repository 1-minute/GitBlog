import axios from 'axios';
import camelcase from 'camelcase-keys';
import getWhateverParameter from '../../../util/whateverParameter';

export const getUserProfile = async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(
      getWhateverParameter(`https://api.github.com/users/${user}`),
    );
    const arr = camelcase(response.data);
    res.json(arr);
  } catch (e) {
    console.log(e);
  }
  res.json({});
};

export const getUserIssue = async (req, res) => {
  try {
    const owner = req.params.owner;
    const repo = 'react-study';
    await getWhateverParameter;
    const response = await axios.get(
      getWhateverParameter(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
      ),
    );
    const arr = camelcase(response.data, { deep: true });
    res.json(arr);
  } catch (err) {
    console.log(err);
  }
};
