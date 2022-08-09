import decks_model from "../../models/decks.js";
const PAGE_SIZE = 10


const search_read = async (req, res) => {
    console.log("search_read")
    try {
        const { search_term, page } = req.body;
        const new_search_term = String(search_term)

        const skip = PAGE_SIZE * (page - 1)

        const data = await decks_model.aggregate([
            {
                $match: {
                    shared: {
                        $eq: true
                    }
                }
            },
            {
                $lookup: {
                    from: "decks_cards",
                    localField: "_id",
                    foreignField: "decks_id",
                    as: "decks_cards"
                }
            },
            {
                "$project": {
                    "_id": 1,
                    "name": 1,
                    "last_update": 1,
                    "cards_size": { "$size": "$decks_cards" }
                }
            },
            {
                $sort: {
                    last_update: -1
                }
            }
        ])

        return res.status(201).json({
            success: true,
            data: data,
        })

        // TODO: wenn zeit ist dann die Suche erweitern
        // // EXIT: we have decks 
        // if (search_decks) return res.status(201).json({
        //     success: true,
        //     data: search_decks,
        // });

        // //## 2: search front
        // const search_front = await decks_model
        //     .find({ shared: { $eq: true } })
        //     .sort({ last_update: 1 })
        //     .skip(skip)
        //     .limit(PAGE_SIZE)

        // // EXIT: we have decks 
        // if (search_front) return res.status(201).json({
        //     success: true,
        //     data: search_front,
        // });


        // //## 3: search back
        // const search_back = await decks_model
        //     .find({ shared: { $eq: true } })
        //     .sort({ last_update: 1 })
        //     .skip(skip)
        //     .limit(PAGE_SIZE)

        // // EXIT: we have decks 
        // if (search_back) return res.status(201).json({
        //     success: true,
        //     data: search_back,
        // });
    } catch (err) {
        console.log("Error", err)

        // EXIT: Error
        return res.status(500).send({
            message: "Error",
            err: err.message,
        });
    }
}

//////////
export {
    search_read,
}