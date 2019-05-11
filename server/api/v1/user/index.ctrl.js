import axios from 'axios';
import removeMd from 'remove-markdown';
import getThumbnail from '../../../util/getThumbnail';
import camelcase from 'camelcase-keys';
import addOAuthParameter from '../../../util/addOAuthParameter';
import User from '../../../db/models';
import { Base64 } from 'js-base64';

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
    const { user } = req.params;

    const findUser = await User.findOne({ name: user });
    if (findUser) {
      const { repo } = findUser;
      const response = await axios.get(
        addOAuthParameter(
          `https://api.github.com/repos/${user}/${repo}/issues`,
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
    } else {
      res.redirect('/');
    }
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

export const saveUserRepository = async (req, res) => {
  try {
    const { user } = req.params;
    const { repo } = req.body;
    const findUser = await User.findOne({ name: user });
    if (findUser) {
      findUser.repo = repo;
    }
    await findUser.save();
    res.json({ status: 'ok' });
  } catch (err) {
    console.log(err);
  }
};

export const aboutReadMe = async (req, res) => {
  try {
    const { user } = req.params;
    const findUser = await User.findOne({ name: user });
    if (findUser) {
      const { repo } = findUser;
      const response = await axios.get(
        addOAuthParameter(
          `https://api.github.com/repos/${user}/${repo}/readme`,
        ),
      );
      const b64String = Base64.decode(response.data.content);
      res.json({ content: b64String });
    }
    res.json({ content: null });
  } catch (err) {
    console.log(err);
  }
};
