import Users from './model';
import md5 from 'md5';
import jwt from 'jsonwebtoken';

export const create = (req, res) => {
  const user = { username: req.body.username, password: md5(req.body.password), role: req.body.role }
  Users.create(user, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const login = (req, res) => {
  Users.findOne({ username: req.body.username, password: md5(req.body.password) }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result) {
        const userTokenObj = {
          username: result.username,
          id: result._id,
          role: result.role
        };
        const token = jwt.sign(userTokenObj, 'MY-PROJECT-SECRET-KEY');     
        res.send({ error: false, token }) 
      } else {
        res.send({ error: true, message: "Invalid Login Details" });
      }
    }
  })
}