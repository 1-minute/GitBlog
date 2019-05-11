import axios from 'axios';
import removeMd from 'remove-markdown';
import getThumbnail from '../../../util/getThumbnail';
import camelcase from 'camelcase-keys';
import addOAuthParameter from '../../../util/addOAuthParameter';

export const getUserProfile = async (req, res) => {
  try {
    const { user } = req.params;
    const response = await axios.get(
      addOAuthParameter(`https://api.github.com/users/${user}`),
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
    const { owner } = req.params;
    const repo = 'react-study';
    const response = await axios.get(
      addOAuthParameter(`https://api.github.com/repos/${owner}/${repo}/issues`),
    );
    const arr = camelcase(response.data, { deep: true });
    res.json(
      arr.map((iss) => {
        iss.plainBody = removeMd(iss.body);
        iss.thumbnail = getThumbnail(iss.body);
        return iss;
      }),
    );
  } catch (err) {
    console.log(err);
  }
};

export const getUserRepositories = async (req, res) => {
  try {
    const { user } = req.params;
    const response = await axios.get(
      addOAuthParameter(`https://api.github.com/users/${user}/repos`),
    );

    const result = response.data.map((v) => ({
      id: v.id,
      name: v.name,
      description: v.description,
    }));

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
