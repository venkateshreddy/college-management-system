import Employee from './model';
export const create = (req, res) => {
  const employee = req.body;
  employee.createdBy = req.user.id;
  Employee.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const showMyProfile = (req, res) =>
  Employee.findOne({ userId: req.user.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result, req.user.id, 'result')
      res.send(result);
    }
  })

export const show = (req, res) =>
  Employee.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllStudents(res);

export const searchEmployee = (req, res) => {
  console.log(req.query);
  Employee.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const updateProfile = (req, res) => {
  const updateObj = {};
  if (req.body.name) {
    updateObj['name'] = req.body.name;
  }
  if (req.body.email) {
    updateObj['email'] = req.body.email;
  } 
  if (req.body.qualification) {
    updateObj['qualification'] = req.body.qualification;
  }
  Employee.findOneAndUpdate({ userId: req.user.id }, updateObj, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  Employee.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllStudents = (res) => {
    Employee.find((er, students) => {
      if (!er) {
        res.send(students);
      } else {
        res.send(er);
      }
    })
  }