const express = require('express');
const router = express.Router();
const lists = require('../data/helpers/listsModel')

const sendUserError = (status, msg, res) => {
    res
        .status(status)
        .json({ Error: msg });
};

/************************************ LISTS SECTION ***********************************/

/********* Get Lists *************/
router.get('/', async (req, res) => {
  await  lists.get()
        .then((list) => {
            res.json(list);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The lists could not be retrieved." });
        });
});

/********* Get Single List *************/
router.get('/:id', async (req, res) => {
    const { id } = req.params
 await  lists.get(id)
        .then(list => {
            if (list) {
                res.json(list);
            } else {
                res
                    .status(404)
                    .json({ message: "The list with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The list information could not be retrieved." });
        });
});


/************* Delete List *************/
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    if (id) {
    await  lists.remove(id)
            .then(list => {
                if (list) {
                    res.json({ message: "The list was successfully deleted" });
                } else {
                    res
                        .status(404)
                        .json({ message: "The list with the specified ID does not exist." })
                }
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ error: "The list could not be removed." });
            });
    }
});

/********* Update List *************/
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const newList = req.body

    if (!newList.list) {
        res
            .status(400)
            .json({ message: "Please provide list for the list." });
    } else {
       
        if (newList) {
       await     lists.update(id, newList)
                .then(list => {
                   
                        
                        if (list) {
                            res
                                .status(201)
                                .json(list);
                        } else {
                            res
                                .status(404)
                                .json({ message: "The list with the specified ID does not exist." })
                        }
                 
                   
                })
                .catch(err => {
                    res
                        .status(500)
                        .json({ error: "The list could not be modified." });
                });
        } else {

            res
                .status(404)
                .json({ message: "The list with the specified ID does not exist." })
        }
    }
})

/********* Create New List *************/
router.post('/', async (req, res) => {
    const list = req.body;
   //console.log("list:", list)
    if (list.listTitle) {
        await lists.insert(list)
            .then(list => {
                res.status(201)
                    .json(list)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert list in db" })
            });
    } else {
        res
            .status(400)
            .json({ message: "missing list Title." })
    }
});

/************* Get Single Project's Actions *************/
/* router.get('/actions/:id', (req, res) => {
    const { id } = req.params;
    projects
        .getProjectActions(id)
        .then(usersActions => {
            if (usersActions === 0) {
                return sendUserError(404, 'No actions in the project', res);
            }
            res.json(usersActions);
        })
        .catch(err => {
            return sendUserError(500, 'Unable to access db', res);
        });
});
 */


module.exports = router;