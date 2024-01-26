require('dotenv').config()
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAIKEY
});

module.exports = async (BotMessages) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: BotMessages,
        })

        return completion.choices[0].message;
    }catch (err){
        console.log(err);
    }
}
