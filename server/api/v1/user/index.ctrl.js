import axios from 'axios';
import removeMd from 'remove-markdown';
import getThumbnail from '../../../util/getThumbnail';
import camelcase from 'camelcase-keys';
import addWhateverParameter from '../../../util/whateverParameter';

export const getUserProfile = async (req, res) => {
  try {
    const user = req.params.user;
    const response = await axios.get(
      addWhateverParameter(`https://api.github.com/users/${user}`),
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
    await addWhateverParameter;
    const response = await axios.get(
      addWhateverParameter(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
      ),
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
