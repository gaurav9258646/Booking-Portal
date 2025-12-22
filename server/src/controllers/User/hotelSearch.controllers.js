const { searchHotelsDB } = require("../../services/User/hotelsSearch.services");

const searchHotels = async (req, res) => {
  const { query } = req.query;
  try {
    const data = await searchHotelsDB(query);
    return res.json({
      success: true,
      message: "Search results",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

module.exports = { searchHotels };
