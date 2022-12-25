const Task = require("./model");
const mongoose = require("mongoose");

const create = async (task) => {
    return Task.create(task);
};

const update = async (task) => {
    const { id, ...rest } = task;
    return Task.findByIdAndUpdate(id, rest, { new: true });
};

const findAll = async (req) => {
    if (req.query.page) {
        const { page = 1, limit = 5 } = req.query;
        const startIndex = page * limit;

        const tasks = await Task.find().skip(startIndex).limit(limit);
        const totalTasks = (await Task.find({ assignee: req.params.id }))
            .length;

        return {
            code: 200,
            data: {
                tasks,
                totalTasks,
            },
        };
    } else {
        const tasks = Task.db
            .collection("tasks")
            .aggregate([
                {
                    $match: {
                        assignee: new mongoose.Types.ObjectId(req.params.id),
                    },
                },
                {
                    $sort: {
                        estimatedTime: -1,
                    },
                },
                {
                    $facet: {
                        tasks: [],
                        metadata: [
                            { $count: "totalTasks" },
                            {
                                $lookup: {
                                    from: "tasks",
                                    pipeline: [
                                        {
                                            $group: {
                                                _id: null,
                                                totalEstimation: {
                                                    $sum: "$estimatedTime", // $estimation is the field name
                                                },
                                            },
                                        },
                                    ],

                                    as: "totalEstimation",
                                },
                            },
                            {
                                $project: {
                                    _id: 0,
                                    totalEstimation: {
                                        $arrayElemAt: [
                                            "$totalEstimation.totalEstimation",
                                            0,
                                        ],
                                    },
                                    totalTasks: "$totalTasks",
                                },
                            },
                        ],
                    },
                },
            ])
            .toArray();

        const name = await Task.db
            .collection("users")
            .findOne({ _id: new mongoose.Types.ObjectId(req.params.id) })
            .then((data) => data.name + " " + data.surname);

        return tasks.then((data) => {
            return {
                code: 200,
                data: {
                    tasks: data[0].tasks,
                    name,
                    totalTasks: data[0].metadata[0]
                        ? data[0].metadata[0].totalTasks
                        : 0,
                    totalEstimation: data[0].metadata[0]
                        ? data[0].metadata[0].totalEstimation
                        : 0,
                },
            };
        });
    }
};

module.exports = {
    create,
    update,
    findAll,
};
