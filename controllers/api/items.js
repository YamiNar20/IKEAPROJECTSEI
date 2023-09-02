const Item = require('../../models/item')

module.exports = {
	index,
	show
};

function jsonItem(_, res) {
	res.json(res.locals.data.todo)
}

function jsonItems(_, res) {
	res.json(res.locals.data.todos)
}



/****** R - Read ********/
async function index(req, res, next) {
	try {
		const items = await Item.find({}).sort('name').populate('category').exec();
		// re-sort based upon the sortOrder of the categories
		items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
		res.status(200).json(items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const item = await Item.findById(req.params.id);
		res.status(200).json(item);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

