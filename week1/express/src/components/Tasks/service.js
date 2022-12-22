const Task = require("./model");

const create = async (task) => {
    return Task.create(task);
};

const update = async (task) => {
    const { id, ...rest } = task;
    return Task.findByIdAndUpdate(id, rest, { new: true });
};

const findAll = async (query) => {
    if (query.page) {
        const { page = 1, limit = 5 } = query;
        const startIndex = page * limit;

        const tasks = await Task.find().skip(startIndex).limit(limit);
        const totalTasks = (await Task.find()).length;

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

        return tasks.then((data) => {
            return {
                code: 200,
                data: {
                    tasks: data[0].tasks,
                    totalTasks: data[0].metadata[0].totalTasks,
                    totalEstimation: data[0].metadata[0].totalEstimation,
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
