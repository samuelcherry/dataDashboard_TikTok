const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require("dotenv").config();;

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

let accessToken = "";
let openId = "";

app.use(cors({
	origin: process.env.FRONTEND_URL,
	credentials: true
	})
);

app.get("/auth/tiktok/callback", async(req, res) => {
	const {code} = req.query;

	if(!code) return res.status(400).send("No code provided");

	try{
		const params = new URLSearchParams({
			client_key:process.env.TIKTOK_CLIENT_KEY,
			client_secret:process.env.TIKTOK_CLIENT_SECRET,
			code: code,
			grant_type: "authorization_code",
			redirect_uri:process.env.TIKTOK_REDIRECT_URI,
		});

		const response = await fetch(
			`https://open.tiktokapis.com/v1/oauth/token?${params.toString()}`,
      		{ method: "POST" }
    	);

		const data = await response.json();

		if(data.error) return res.status(400).send("Error exchaning code");

		accessToken = data.data.access_token;
		openId = data.data.open_id;

		console.log("accessToken: ", accessToken);
		console.log("openId: ", openId);

		res.redirect("https://data-dashboard-tiktok.netlify.app");

	}catch(err){
		console.error(err);
		res.status(500).send('Server Error');
	}
});

app.get("/api/tiktok/user", async(req,res) => {
	if(!accessToken || !openId)
		return res.status(400).json({error:"Not Connected"});

		try{
			const response = await fetch(
				`https://open.tiktokapis.com/v1/user/info/?open_id=${openId}`,
      			{
        			headers: { Authorization: `Bearer ${accessToken}` },
      			}
			);
			const data = await response.json();
			res.json(data);
		} catch(err) {
			console.error(err);
			res.status(500).json({error: "Failed to fetch user info"});
		}
	});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
