let axios = require('axios')

let getPicture = async function (req, res) {
    try {
        let data = req.body

        let tag = data.tags

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "Body should not be empty" })
        }

        let tags = ["food", "landscape"]

        if (!tags.includes(tag)) {
            return res.status(400).send({ status: false, message: "tag must be food or landscape" })
        }

        var options = {
            method: "get",
            url: `https://api.unsplash.com/search/photos?page=1&query=${tag}&client_id=HacpscyXCXdaajDTPpNkOvmYJcuVJzR-43cBxH4Kzjw`,

        }

        let result = await axios(options)

        res.send({ msg: result.data })

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


module.exports.getPicture = getPicture