const categoryControllers = require('./categories.controller')

const getAllCategories = (req, res) => {
    categoryControllers.getAllCategories()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getCategoryById = (req, res) => {
    const id = req.params.id
    categoryControllers.getCategoryById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(400).json({message: 'Invalid id'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postCategory = (req, res) => {
    const { name } = req.body;
  
    if (name) {
      categoryControllers.createCategory(name)
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
    } else {
      res.status(400).json({ message: "Missing data" });
    }
  };
  

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory
}