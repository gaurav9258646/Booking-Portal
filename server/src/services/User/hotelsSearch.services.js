const Hotel = require("../../model/hotels");

const searchHotelsDB = async (query) => {
  if (!query) return [];
  return await Hotel.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { city: { $regex: query, $options: "i" } },
      { amenities: { $regex: query, $options: "i" } },
    ],
  });
};

module.exports = {
  searchHotelsDB,
};
