const updateDB = async (arr, schema) => Promise.all(arr.map(x => {
    const __v = x.__v
    const _id = x._id
    
    if (!__v) {
        return Promise.resolve(schema.create(x))
    } else {
        return Promise.resolve(schema.findOneAndUpdate({ _id }, x))
    }
}))

// TODO: wenn zeit ist dann testen ob das hier schneller ist
// https://stackoverflow.com/questions/20096885/update-multiple-documents-by-id-set-mongoose
// db.Element.update(
//     { _id: { $in: ['id1', 'id2', 'id3'] } },
//     { $set: { visibility : yourvisibility } },
//     {multi: true}
//  )

// model.find({
//     '_id': { $in: [
//         mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
//         mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
//         mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
//     ]}
// }, function(err, docs){
//      console.log(docs);
// });


export {
    updateDB
}