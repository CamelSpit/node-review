// pretend database
var tasks = [{ description: 'walk the dog', competed: false, id: 0}]
var nextId = 1;

// controllers to export
module.exports = {
    // CRUD
    create: (req, res) => {
        // get the description off of the body
        const {description} = req.body;
        // add the new task to the tasks and increment nextID BEFORE setting id to it.
        tasks.push({
            description: description,
            competed: false,
            id: ++nextId
        });
        // Send back the entire list of tasks
        res.status(200).send(tasks);
    },
    read: (req, res) => {
        
        // Send back the entire list of tasks
        res.status(200).send(tasks);
    },
    update: (req, res) => {
        // grab the new description off body
        const {description} = req.body;
        // Grab the id off of the URL
        const {id} = req.params,
        // find the task in the array
        task = tasks.find(e => e.id == id);
        // set the description to the new description.
        //If the new description is falsy, use the old description
        task.description = description || task.description;

        // Send back the entire list of tasks
        res.status(200).send(tasks)
    },
    complete: (req, res) => {
        // Grab the id off of the URL
        const {id} = req.params;
        
        //find the task with that id 
        task = tasks.find(e => e.id == id)
        // set completed to true
        task.competed = true;

        // Send back the entire list of tasks
        res.status(200).send(tasks)
    },
    delete: (req, res) => {
        // Grab the id off of the URL
        const {id} = req.params,
        // find the index of the task
        taskIndex = tasks.findIndex(e => e.id == id);
        // remove the task from the array
        tasks.splice(taskIndex, 1);

        // Send back the entire list of tasks
        res.status(200).send(tasks)
    }

}